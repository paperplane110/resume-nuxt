<template>
  <div>
    <br />
    <Text hero>Form.</Text>
    <form>
      <Text h3>Single line input</Text>
      <fieldset>
        <legend>个人信息录入</legend>
        <p>
          <label for="name">Name: </label>
          <input id="name" type="text" placeholder="Enter your name" required />
        </p>
        <p>
          <label for="tel">Mobile: </label>
          <input id="tel" type="tel" placeholder="Enter your number" />
        </p>
        <p>
          <label for="email">Email: </label>
          <input id="email" type="email" placeholder="Enter your email" pattern="" />
        </p>
        <p>
          <label for="password">Password: </label>
          <input id="password" type="password" />
        </p>
        <p>
          <input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
        </p>
        <p>
          <label for="count">Count: </label>
          <input id="count" type="number" name="count" min="10" max="20" v-model="cnt" />
          <input id="count" type="range" name="count" min="10" max="20" v-model="cnt" />
          <output class="price-output" for="count">{{ cnt }}</output>
        </p>
      </fieldset>
      <Text h3>Checkable input</Text>
      <fieldset>
        <legend>Gender</legend>
        <ul>
          <li>
            <label for="male">Male: </label>
            <input type="checkbox" id="male" name="gender" value="male" checked />
          </li>
          <li>
            <label for="female">Female: </label>
            <input type="checkbox" id="female" name="gender" value="female" />
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>What's tech do your focus on</legend>
        <ul>
          <li>
            <label for="fe">FE </label>
            <input type="radio" id="fe" name="tech" value="fe" checked />
          </li>
          <li>
            <label for="be">BE </label>
            <input type="radio" id="be" name="tech" value="be" />
          </li>
        </ul>
      </fieldset>
      <Text h3>Button</Text>
      <input type="submit" value="submit">
      <input type="reset" value="reset">
      <input type="button" value="button">
      <Text h3>Image button</Text>
      <input type="image" alt="Click me!" src="/img/sample.jpg" name="image" width="80" height="30" />
      <Text h3>File picker</Text>
      <input type="file" name="file" id="file" accept="image/*" />
      <Text h3>Date and time picker</Text>
      <p>
        <label for="birth">Date: </label>
        <input type="date" id="birth" />
      </p>
      <input type="datetime-local" id="birth" />
      <input type="time" id="birth" />
      <p>
        <input type="month" id="birth" />
      </p>
      <Text h3>Color picker</Text>
      <input type="color" name="color" id="color" />
    </form>

  </div>
</template>

<script setup lang='ts'>
const cnt = ref(10)
</script>

<style scoped>
input {
  padding: 0px 5px;
  background-color: rgb(238, 238, 238);
  border: 1px solid silver;
  border-radius: 5px;
}
</style>
