<template>
  <section class="contact-page">
    <form>
      <h1>Contact Us</h1>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Full name" />
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@email.com"
      />
      <label for="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="How may we help you?"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<style>
.contact-page {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

h1 {
  font-weight: 500;
  margin: 0 0 1.5rem 0;
}

form {
  box-sizing: border-box;
  padding: 1rem;
  border: solid 1px #cbcbcb;
  border-radius: 2px;
  margin-top: 5rem;
  width: 65ch;
  height: fit-content;
}

label,
input {
  box-sizing: border-box;
  display: block;
  font-size: 1rem;
  width: 100%;
  text-indent: 0.25rem;
}

input {
  height: 40px;
  margin-bottom: 1rem;
}

textarea {
  box-sizing: border-box;
  display: block;
  font-family: inherit;
  font-size: 1rem;
  height: 200px;
  width: 100%;
  text-indent: 0.25rem;
}

button {
  background-color: #000912;
  box-sizing: border-box;
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  height: 50px;
  margin-top: 1rem;
  width: 100%;
}

button:hover {
  background-color: #001b36;
}
</style>
