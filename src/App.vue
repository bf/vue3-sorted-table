<template>
  <div id="app">
    <h1>Vue3-Sorted-Table</h1>

    <SortedTable :values="values" border="1">
      <thead>
        <tr>
          <th scope="col" style="text-align: left; width: 10rem">
            <sort-link name="id">ID</sort-link>
          </th>
          <th scope="col" style="text-align: left; width: 10rem">
            <sort-link name="name">Name</sort-link>
          </th>
          <th scope="col" style="text-align: left; width: 10rem">
            <sort-link name="hits">Hits</sort-link>
          </th>
        </tr>
      </thead>
      <template #body="slotProps">
        <tbody>
          <tr v-for="value in slotProps.values" :key="value.id">
            <td>{{ value.id }}</td>
            <td>{{ value.name }}</td>
            <td>{{ value.hits }}</td>
          </tr>
        </tbody>
      </template>
    </SortedTable>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    values: [
      { name: "Plugin Foo", id: 2, hits: 33 },
      { name: "Plugin Bar", id: 1, hits: 42 },
      { name: "Plugin Foo Bar", id: 3, hits: 79 },
    ],
  }),
};
</script>
