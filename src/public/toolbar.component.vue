<script>
export default {
  name: "toolbar-content"
}
</script>

<template>
  <!--Toolbar que muestra About User-->
  <pv-toolbar class="bg-cyan-300">
    <template #start>
      <div class="p-toolbar-group-left">
        <button type="button" class="p-link">
          <i class="pi pi-bars"/>
        </button>
      </div>
    </template>
    <template #center>
      <div class="p-toolbar-group-center text-color">
        <h1>About User</h1>
      </div>
    </template>
    <template #end>
      <div class="p-toolbar-group-right">
        <button type="button" class="p-link">
          <i class="pi pi-user"/>
        </button>
      </div>
    </template>

  </pv-toolbar>

</template>

