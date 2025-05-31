# ChatGPT 4o

## 1: I tried to follow the metaprompt technique, new to me

I have the following instructions, create me a prompt to achieve that

<Pastes README.md>

---

## 2: I add that it should be markdown, learned that i need to be more specific

I have the following instructions, create me a prompt in md to achieve that

---

<Pastes README.md>

## 3: I had to translate the prompt to spanish (which i forgot), I also adapted it to follow more things I learned in class basically dividing in role, context, task

# Role

You're a web developer solving a challenge

# Context

Use vanilla JavaScript logic to take an input string from a user and reverses it

# Task

Create a simple HTML page with JavaScript logic that takes an input string and reverses it.

- The input should be sent by the user when they press "Enter"
- The output should be the input string reversed
- All outputs should be displayed in the browser
- A previw are should be available when the corresponding checkbox is checked
- Keep the outputs in memory (JS), not localStorage

# Expected Output

- For `AI4Devs` the reversed string should be`sveD4IA`
- If user has sent any inputs, they should be displayed in a list below the input
- Each output should have a button to copy to clipboard
- Each output should have a button to reload original string into the input
- The input should have a checkbox for "auto mode" that reverses automatically and only saves to history when the user sends the input

## 4: HTML and javascript were a single file, because i had not tell it to

separate html and script

## 5: two checkbox complementing each other's function, i don't know where this part come from

There's are two checkboxes, when it should be only one that enables the preview
