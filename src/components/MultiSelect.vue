<template>
  <div class="multi-select" ref="dropdownRef">
    <div class="select-box" @click="toggleDropdown">
      <div class="tags">
        <span v-for="item in modelValue" :key="item" class="tag">
          {{ item }}
          <span class="remove" @click.stop="removeItem(item)">×</span>
        </span>
      </div>
      <span class="arrow">▼</span>
    </div>

    <div v-if="open" class="dropdown">
      <div
        v-for="option in options"
        :key="option"
        class="dropdown-item"
        :class="{ selected: modelValue.includes(option) }"
        @click="toggleSelection(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{
  modelValue: string[];
  options: string[];
}>();

const emit = defineEmits(["update:modelValue"]);

const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => (open.value = !open.value);

const toggleSelection = (item: string) => {
  if (props.modelValue.includes(item)) {
    emit("update:modelValue", props.modelValue.filter(i => i !== item));
  } else {
    emit("update:modelValue", [...props.modelValue, item]);
  }
};

const removeItem = (item: string) => {
  emit("update:modelValue", props.modelValue.filter(i => i !== item));
};

const handleClickOutside = (e: MouseEvent) => {
  if (!dropdownRef.value?.contains(e.target as Node)) {
    open.value = false;
  }
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onBeforeUnmount(() => document.removeEventListener("click", handleClickOutside));
</script>

<style scoped>
.multi-select {
  width: 100%;
  position: relative;
  font-family: var(--font-san);
}

.select-box {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  background: white;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background: var(--color-primary);
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.remove {
  margin-left: 6px;
  font-weight: bold;
  cursor: pointer;
}

.arrow {
  font-size: 12px;
}

.dropdown {
  position: absolute;
  width: 100%;
  background: white;
  border-radius: 10px;
  margin-top: 6px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 12%);
  max-height: 200px;
  overflow-y: auto;
  z-index: 20;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #f5f5f5;
}

.selected {
  background: var(--color-primary-accent);
}
</style>
