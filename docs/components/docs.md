# PushButton

> An example-less button.

## Props

| Prop name | Type   | Default  | Description            |
| --------- | ------ | -------- | ---------------------- |
| color     | string | '#333'   |                        |
| size      | string | 'normal' | `small, normal, large` |

# CounterButton

> Button that counts how many times it was pressed and exposes a `@public` method to reset itself.

## Methods

### set

> Sets the counter to a particular value.

#### Params

| Param name | Type   | Description               |
| ---------- | ------ | ------------------------- |
| newValue   | Number | New value for the counter |

#### Return

| Type   | Description |
| ------ | ----------- |
| string | Test        |

## Events

| Event name | Type   | Description           |
| ---------- | ------ | --------------------- |
| after      | number | After increment event |

---

```jsx
<div>
  <CounterButton ref="count"/>
  <Button size="small" :onClick="() => {this.$refs.count.set(0)}">
    Reset
  </Button>
</div>
```

# ~~RandomButton~~

> **Deprecated** Use the [only true button component](#button) instead

> A button that requires json

## Props

| Prop name | Type  | Default | Description              |
| --------- | ----- | ------- | ------------------------ |
| variants  | array |         | List of possible labels. |

---

You can `require` external files in your examples:

    const names = require('./dog-names.json');
    <RandomButton :variants="names" />

Another example initializing Vue

    const names = require('./dog-names.json');

    new Vue({
      data(){
        return {
          list: names
        }
      },
      template: `
        <div>
          <RandomButton :variants="list" />
        </div>
      `
    })

# Placeholder

> Button that counts how many times it was pressed and exposes a `@public` method to reset itself.

## Props

| Prop name | Type   | Default  | Description                                             |
| --------- | ------ | -------- | ------------------------------------------------------- |
| type      | string | 'animal' | `animal, bacon, beard, cat, city, food, nature, people` |
| width     | number | 150      |                                                         |
| height    | number | 150      |                                                         |

---

Another example with custom blocks inside `*.vue` files.

    <Placeholder type="animal"/>

---

    <Placeholder type="beard"/>

# Input

## Props

| Prop name   | Type           | Default | Description                                              |
| ----------- | -------------- | ------- | -------------------------------------------------------- |
| v-model     | number\|string |         |                                                          |
| regExp      | RegExp         | null    | Using for: String.prototype.replace(regexp, replacement) |
| replacement | string         | ''      | Using for: String.prototype.replace(regexp, replacement) |

## Events

| Event name | Type      | Description  |
| ---------- | --------- | ------------ |
| input      | union     | Input event  |
| change     | undefined | Change event |
| fire       | string    | Fire event   |

---

Basic Input

```js
  const setting = {
    regExp: /^[0\D]*|\D*/g, // Match any character that doesn't belong to the positive integer
    replacement: '',
    val: '223'
  }
  const executeFire = function(event){
    alert(event)
  }

  <Input
      v-model="setting.val"
      class="your-class-name"
      :regExp="setting.regExp"
      :replacement="setting.replacement"
      @fire="executeFire"
    ></Input>
```

# Button

> The only true button.

## Props

| Prop name | Type   | Default                                                               | Description                                      |
| --------- | ------ | --------------------------------------------------------------------- | ------------------------------------------------ |
| propA     | string | '#333'                                                                |                                                  |
| color     | string | '#333'                                                                | The color for the button.                        |
| size      | string | 'normal'                                                              | The size of the button<br>`small, normal, large` |
| onClick   | func   | event => {<br> console.log('You have clicked me!', event.target)<br>} | Gets called when the user clicks on the button   |

---

You can add a custom classes to an example wrapper (` ```js { "className": "checks" } `):

```js { "className": "checks" }
<Button>I’m transparent!</Button>
```

Or disable an editor by passing a `noeditor` modifier (` ```js noeditor `):

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier: (` ```js static `):

```js static
import Vue from "vue";
```

Fenced blocks with other languages are rendered as highlighted code:

```html
<h1>Hello world</h1>
```

---

Basic button:

```jsx
<Button>Push Me</Button>
```

Big pink button:

```jsx
<Button size="large" color="deeppink">
  Click Me
</Button>
```

And you _can_ **use** `any` [Markdown](http://daringfireball.net/projects/markdown/) here.

Fenced code blocks with `vue`, `js`, `jsx` or `javascript` languages are rendered as a interactive playgrounds:

```jsx
<Button>Push Me</Button>
```

You can also use the Single File Component Format

```vue
<template>
  <div>
    <Button @click.native="pushButton">Push Me</Button>
    <hr />
    <p>Next Dog Name: {{ dogName }}</p>
  </div>
</template>
<script>
const dogNames = require("dog-names").all;

// You can also use 'exports.default = {}' style module exports.
export default {
  name: "ButtonExample",
  data() {
    return { numClicks: 0, dogName: dogNames[0] };
  },
  methods: {
    pushButton() {
      this.numClicks += 1;
      this.dogName = dogNames[this.numClicks];
    }
  }
};
</script>
```

# Modal

> Modal example [modal-component](https://vuejs.org/v2/examples/modal.html).

Author: [Vue](https://vuejs.org/v2/examples/modal.html)

## Props

| Prop name | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| showModal | boolean | false   | Show modal  |

## Slots

| Name | Description          | Bindings |
| ---- | -------------------- | -------- |
| head | Use this slot header |          |
| body | Use this slot body   |          |

---

You can modify the code through the playground

    let isOpen = false;

    <div>
      <button @click.prevent="isOpen = true">Open</button>
      <Modal :showModal="isOpen">
        <h1 slot="head">Hallo!</h1>
        <div slot="body">
          <button  @click.prevent="isOpen = false">Close</button>
        </div>
      </Modal>
    </div>

The variables are reactive:

    let count = 1;

    <button @click.prevent="count++">{{ count }}</button>

You can also develop more complex examples, instantiating Vue

    const timeCountdown = 5;

    new Vue({
      data(){
        return {
          showModal: false,
          countdown: timeCountdown
        }
      },
      watch:{
          showModal(value) {
            if (value) {
              var cycle = setInterval(()=>{
                this.countdown--;
                if (this.countdown === 0) {
                  this.showModal = false;
                  this.countdown = timeCountdown;
                  clearInterval(cycle);
                }
              },1000);
            }
          },
      },
      template: `
        <div>
          <button @click.prevent="showModal = true">Open Modal</button>
          <Modal :showModal="showModal">
            <h1 slot="head">Title</h1>
            <div slot="body">
              Countdown to close mode {{ countdown }}
            </div>
          </Modal>
        </div>
      `
    })

# Input

## Props

| Prop name   | Type           | Default | Description                                              |
| ----------- | -------------- | ------- | -------------------------------------------------------- |
| v-model     | number\|string |         |                                                          |
| regExp      | RegExp         | null    | Using for: String.prototype.replace(regexp, replacement) |
| replacement | string         | ''      | Using for: String.prototype.replace(regexp, replacement) |

## Events

| Event name | Type      | Description  |
| ---------- | --------- | ------------ |
| input      | union     | Input event  |
| change     | undefined | Change event |
| fire       | string    | Fire event   |

---

Basic Input

```js
  const setting = {
    regExp: /^[0\D]*|\D*/g, // Match any character that doesn't belong to the positive integer
    replacement: '',
    val: '223'
  }
  const executeFire = function(event){
    alert(event)
  }

  <Input
      v-model="setting.val"
      class="your-class-name"
      :regExp="setting.regExp"
      :replacement="setting.replacement"
      @fire="executeFire"
    ></Input>
```

# Modal

> Modal example [modal-component](https://vuejs.org/v2/examples/modal.html).

Author: [Vue](https://vuejs.org/v2/examples/modal.html)

## Props

| Prop name | Type    | Default | Description |
| --------- | ------- | ------- | ----------- |
| showModal | boolean | false   | Show modal  |

## Slots

| Name | Description          | Bindings |
| ---- | -------------------- | -------- |
| head | Use this slot header |          |
| body | Use this slot body   |          |

---

You can modify the code through the playground

    let isOpen = false;

    <div>
      <button @click.prevent="isOpen = true">Open</button>
      <Modal :showModal="isOpen">
        <h1 slot="head">Hallo!</h1>
        <div slot="body">
          <button  @click.prevent="isOpen = false">Close</button>
        </div>
      </Modal>
    </div>

The variables are reactive:

    let count = 1;

    <button @click.prevent="count++">{{ count }}</button>

You can also develop more complex examples, instantiating Vue

    const timeCountdown = 5;

    new Vue({
      data(){
        return {
          showModal: false,
          countdown: timeCountdown
        }
      },
      watch:{
          showModal(value) {
            if (value) {
              var cycle = setInterval(()=>{
                this.countdown--;
                if (this.countdown === 0) {
                  this.showModal = false;
                  this.countdown = timeCountdown;
                  clearInterval(cycle);
                }
              },1000);
            }
          },
      },
      template: `
        <div>
          <button @click.prevent="showModal = true">Open Modal</button>
          <Modal :showModal="showModal">
            <h1 slot="head">Title</h1>
            <div slot="body">
              Countdown to close mode {{ countdown }}
            </div>
          </Modal>
        </div>
      `
    })

# CounterButton

> Button that counts how many times it was pressed and exposes a `@public` method to reset itself.

## Methods

### set

> Sets the counter to a particular value.

#### Params

| Param name | Type   | Description               |
| ---------- | ------ | ------------------------- |
| newValue   | Number | New value for the counter |

#### Return

| Type   | Description |
| ------ | ----------- |
| string | Test        |

## Events

| Event name | Type   | Description           |
| ---------- | ------ | --------------------- |
| after      | number | After increment event |

---

```jsx
<div>
  <CounterButton ref="count"/>
  <Button size="small" :onClick="() => {this.$refs.count.set(0)}">
    Reset
  </Button>
</div>
```

# Button

> The only true button.

## Props

| Prop name | Type   | Default                                                               | Description                                      |
| --------- | ------ | --------------------------------------------------------------------- | ------------------------------------------------ |
| propA     | string | '#333'                                                                |                                                  |
| color     | string | '#333'                                                                | The color for the button.                        |
| size      | string | 'normal'                                                              | The size of the button<br>`small, normal, large` |
| onClick   | func   | event => {<br> console.log('You have clicked me!', event.target)<br>} | Gets called when the user clicks on the button   |

---

You can add a custom classes to an example wrapper (` ```js { "className": "checks" } `):

```js { "className": "checks" }
<Button>I’m transparent!</Button>
```

Or disable an editor by passing a `noeditor` modifier (` ```js noeditor `):

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier: (` ```js static `):

```js static
import Vue from "vue";
```

Fenced blocks with other languages are rendered as highlighted code:

```html
<h1>Hello world</h1>
```

---

Basic button:

```jsx
<Button>Push Me</Button>
```

Big pink button:

```jsx
<Button size="large" color="deeppink">
  Click Me
</Button>
```

And you _can_ **use** `any` [Markdown](http://daringfireball.net/projects/markdown/) here.

Fenced code blocks with `vue`, `js`, `jsx` or `javascript` languages are rendered as a interactive playgrounds:

```jsx
<Button>Push Me</Button>
```

You can also use the Single File Component Format

```vue
<template>
  <div>
    <Button @click.native="pushButton">Push Me</Button>
    <hr />
    <p>Next Dog Name: {{ dogName }}</p>
  </div>
</template>
<script>
const dogNames = require("dog-names").all;

// You can also use 'exports.default = {}' style module exports.
export default {
  name: "ButtonExample",
  data() {
    return { numClicks: 0, dogName: dogNames[0] };
  },
  methods: {
    pushButton() {
      this.numClicks += 1;
      this.dogName = dogNames[this.numClicks];
    }
  }
};
</script>
```

# ~~RandomButton~~

> **Deprecated** Use the [only true button component](#button) instead

> A button that requires json

## Props

| Prop name | Type  | Default | Description              |
| --------- | ----- | ------- | ------------------------ |
| variants  | array |         | List of possible labels. |

---

You can `require` external files in your examples:

    const names = require('./dog-names.json');
    <RandomButton :variants="names" />

Another example initializing Vue

    const names = require('./dog-names.json');

    new Vue({
      data(){
        return {
          list: names
        }
      },
      template: `
        <div>
          <RandomButton :variants="list" />
        </div>
      `
    })

# Placeholder

> Button that counts how many times it was pressed and exposes a `@public` method to reset itself.

## Props

| Prop name | Type   | Default  | Description                                             |
| --------- | ------ | -------- | ------------------------------------------------------- |
| type      | string | 'animal' | `animal, bacon, beard, cat, city, food, nature, people` |
| width     | number | 150      |                                                         |
| height    | number | 150      |                                                         |

---

Another example with custom blocks inside `*.vue` files.

    <Placeholder type="animal"/>

---

    <Placeholder type="beard"/>
