<template>
  <table class="table">
    <slot></slot>
    <slot name="head"></slot>
    <slot name="body" :values="sortedValues"></slot>
    <slot name="foot"></slot>
  </table>
</template>

<script>
import { watch, provide, ref } from "vue";

export default {
  name: "SortedTable",
  props: {
    values: {
      type: Array,
      required: true,
      default: null,
    },
    dir: {
      type: String,
      default: "asc",
    },
    sort: {
      type: String,
      default: "id",
    },
    ascIcon: {
      type: String,
      default: "<span> ▲</span>",
    },
    descIcon: {
      type: String,
      default: "<span> ▼</span>",
    },
    onSort: {
      type: null,
      default: null,
    },
  },
  emits: ["sort-table"],
  setup(props) {
    const sortOrder = ref({
      direction: props.dir,
      column: props.sort,
    });

    function updateSortByColumn(newSortByColumn) {
      let newSortDirection;
      if (newSortByColumn == sortOrder.value.column) {
        // if same column is sorted as before, then change direction
        newSortDirection = sortOrder.value.direction === "asc" ? "desc" : "asc";
      } else {
        // keep old direction
        newSortDirection = sortOrder.value.direction;
      }

      sortOrder.value = {
        direction: newSortDirection,
        column: newSortByColumn,
      };
    }

    provide("sortOrder", {
      sortOrder,
      updateSortByColumn,
    });

    provide("sortIcon", () => {
      if (sortOrder.value.direction == "asc") {
        // ascending icon
        if (props.ascIcon) {
          return props.ascIcon;
        }
      } else {
        // descending icon
        if (props.descIcon) {
          return props.descIcon;
        }
      }
    });

    return {
      sortOrder,
    };
  },
  computed: {
    get: function () {
      if (this.$_) {
        return this.$_.get;
      } else {
        return this.getValue;
      }
    },
    sortedValues: function () {
      if (this.onSort) {
        return this.values;
      }

      if (!this.values) {
        return [];
      }

      return this.values.slice().sort(
        function (a, b) {
          let modifier = 1;
          if (this.sortOrder.direction === "desc") {
            modifier = -1;
          }
          if (
            this.get(a, this.sortOrder.column) <
            this.get(b, this.sortOrder.column)
          ) {
            return -1 * modifier;
          }
          if (
            this.get(a, this.sortOrder.column) >
            this.get(b, this.sortOrder.column)
          ) {
            return 1 * modifier;
          }
          return 0;
        }.bind(this)
      );
    },
  },
  mounted() {
    watch(this.sortOrder, (oldSortOrder, newSortOrder) => {
      // emit change event
      this.$emit("sort-table", newSortOrder.column, newSortOrder.direction);

      // call onSort handler
      if (this.onSort) {
        this.onSort(newSortOrder.column, newSortOrder.direction);
      }
    });
  },
  methods: {
    getValue: function (array, key) {
      return array[key];
    },
  },
};
</script>
