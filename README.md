# vue3-sorted-table
![MIT](https://img.shields.io/github/license/BernhardtD/vue3-sorted-table.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/vue3-sorted-table.svg?style=flat-square)](https://www.npmjs.com/package/vue3-sorted-table)

A basic sorted table for Vue3, updated version of [vue-sorted-table](https://github.com/BernhardtD/vue-sorted-table)

## Installation
Install with NPM:

```bash
npm install --save vue3-sorted-table
```

Import globally in Nuxt3 app as a plugin in `nuxt-app/plugins/sorted-table.js`:

```javascript
import SortedTablePlugin from 'vue3-sorted-table'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SortedTablePlugin)
})
```


## Examples
### Basic
The basic example shows how to use the `SortedTable` and `SortLink` components:
```html
<template>
  <div id="app">
    <sorted-table :values="values">
      <thead>
        <tr>
          <th scope="col" style="text-align: left; width: 10rem;">
            <sort-link name="id">ID</sort-link>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <sort-link name="name">Name</sort-link>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <sort-link name="hits">Hits</sort-link>
          </th>
        </tr>
      </thead>
      <template #body="{ values }">
        <tbody>
          <tr v-for="value in values" :key="value.id">
            <td>{{ value.id }}</td>
            <td>{{ value.name }}</td>
            <td>{{ value.hits }}</td>
          </tr>
        </tbody>
      </template>
    </sorted-table>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      values: [
        { name: "Plugin Foo", id: 2, hits: 33 },
        { name: "Plugin Bar", id: 1, hits: 42 },
        { name: "Plugin Foo Bar", id: 3, hits: 79 }
      ]
    };
  }
};
</script>
```

The `sorted-table` tag requires a `values` property, which is an array of objects which contain the data:
```html
<sorted-table :values="values">
</sorted-table>
```

The `sort-link` tag adds a link to sort the provided data. In the case the `name` property value is the current
sorting, the component adds a sort icon, depending on the actual order:
```html
<sort-link name="id">ID</sort-link>
```

The sorted data is made accessible as a [scoped slot](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots).
```html
<template #body="sort">
  <tbody>
    {{sort}}
  </tbody>
</template>
```

Now we can access the slot scope via `sort` and iterate over the sorted values to render the data:
```html
<tr v-for="value in sort.values" :key="value.id">
  <td>{{ value.id }}</td>
  <td>{{ value.name }}</td>
  <td>{{ value.hits }}</td>
</tr>
```
