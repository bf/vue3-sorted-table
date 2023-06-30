<template>
  <a href="#" @click.prevent="updateSortByColumn(name)">
    <slot>{{ name }}</slot>
    <slot name="icon">
      <span v-if="sortOrder.column == name" v-html="sortIcon()" />
    </slot>
  </a>
</template>

<script>
import { inject } from "vue";

export default {
  name: "SortLink",
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
  },
  setup() {
    const sortIcon = inject("sortIcon");
    const { sortOrder, updateSortByColumn } = inject("sortOrder");

    return {
      sortIcon,
      sortOrder,
      updateSortByColumn,
    };
  },
};
</script>
