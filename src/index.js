import express from "express";
import { z, ZodError } from "zod";
import sendEmailNotification from "..//src/utils/sendMail.js";

import accessGoogleSheets, { SHEET_ID } from "./contactSheet.js";

const app = express();

// Data schema validation with zod
const contactForm = z.object({
  username: z.string().min(1, { message: "name is required" }),
  email: z.string().email(),
  message: z
    .string()
    .min(4, { message: "message is required?" })
    .max(1000, { message: `Message can't exceed 1000 characters!` }),
});

app.use(express.json());
app.use(express.static("public"));

app.post("/message", async (req, res) => {
  try {
    const response = contactForm.parse(req.body);

    // sending Object to googlesheets

    const rowsResponseValues = Object.values(response);

    await accessGoogleSheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      // range: "Sheet1!A2:2",
      range: "Sheet1!A:C",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "RAW",
      requestBody: {
        values: [rowsResponseValues],
      },
    });
    // send mail func call
    const { username, email } = response;
    sendEmailNotification(username, email);
    res.json({ message: "Message added succcessfully!" });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({ err: err.message });
    } else {
      res.status(400).json({ err });
    }
  }
});

const port = 4600;
app.listen(port, console.log(`Server is listening on port ${port}...`));
