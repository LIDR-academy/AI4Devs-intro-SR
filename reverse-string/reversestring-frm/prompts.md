## **Chatbot: Google Gemini 2.5 Pro**

## **Prompt #1:**
> "I need you to follow some instructions to code a web application that follows what is established in the file "README.md" of the github repository https://github.com/FacuRamallo/AI4Devs-intro-SR, more precisely in this link https://github.com/FacuRamallo/AI4Devs-intro-SR/blob/main/reverse-string/README.md#reverse-string-en
>
> To do it, I'll give you some context restrictions:
>
> 1 - You are a senior web developer
>
> 2 - You just need to do what the instructions say
>
> 3 - I want you to write the code so I can just copy and paste it
>
> 4 - Let's do it iteratively, give your solution, I will test it, and give you feedback
>
> 5 - If you are not able to follow any instruction, I want you to tell me
>
> 6 - you will use vanilla javascript including basic css settings to be able to test the solucion in my browser. I wil copy and paste the code you give me and then run the solucion
>
> 7 - also, below the text input field, display a list with the history of inverted strings from the session. Each entry must have:
>
> &nbsp;&nbsp;&nbsp;&nbsp;- A button to copy the string to the clipboard.
>
> &nbsp;&nbsp;&nbsp;&nbsp;- A button to reload that string into the input field.
>
> &nbsp;&nbsp;&nbsp;&nbsp;- An automatic mode checkbox (activated by default). If selected, the app automatically inverts the entered text, but only saves it to the history when the user clicks "copy".
>
> Important Note: The history must be kept in memory (JS), do not use localStorage."

---

## **Prompt #2:**
> "The solution you gave me is working ok.
>
> There is only one thing I need you to change, and is the following:
>
> I need the same code distributed in 2 files, "index.html" and "script.js" and the corresponding linking between them, so I can run the project with live-server"