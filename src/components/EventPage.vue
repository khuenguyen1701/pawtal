<template>
  <div class="min-h-screen bg-[#f7f3e3] text-gray-900">
    <!-- Breadcrumb -->
    <div class="px-8 pt-6 text-sm text-gray-700">
      <span class="font-semibold">DePauw University ></span>
      <span class="font-semibold"> Thursday, November 28 ></span>
      <div class="text-xs mt-1">
        Exhibit NOW in IMES E25–310, from May 23 onward! Stop by to visit and learn more!
      </div>
    </div>

    <!-- Main Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 px-8 py-10">

      <!-- LEFT CARD -->
      <div class="bg-white rounded-xl shadow p-4">
        <!-- Event Poster -->
        <img
          src="/images/event-poster.png"
          alt="Event Poster"
          class="rounded-lg mb-4"
        />

        <div class="text-sm mb-4">
          <div class="flex items-center gap-2 font-medium mb-1">
            <i class="fa-regular fa-calendar"></i>
            Thursday, Nov 28
          </div>

          <p class="text-gray-700">Open for Everyone</p>
          <p class="text-gray-700">Free Entrance</p>
        </div>

        <!-- Buttons -->
        <button
          class="w-full bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          I'm Interested
        </button>

        <div class="flex justify-end mt-2">
          <button class="p-2 rounded-lg hover:bg-gray-100 transition">
            <i class="fa-regular fa-bookmark text-xl"></i>
          </button>
        </div>
      </div>

      <!-- RIGHT CONTENT -->
      <div>
        <p class="uppercase tracking-wide text-sm text-gray-700">Exhibition</p>

        <h1 class="text-3xl font-bold mt-1">
          Paradigm Shift in Infectious Diseases
        </h1>

        <p class="mt-2 text-gray-700">
          Sponsor by
          <a class="text-blue-600 underline" href="#">XYZ at DePauw University</a>
        </p>

        <!-- Event Details -->
        <h2 class="text-2xl font-serif font-semibold mt-8">Event Details:</h2>

        <p class="mt-4 leading-relaxed text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam libero,
          pharetra ut placerat quis, porttitor vel elit. Integer tempus risus pulvinar,
          ultricies lectus finibus, tristique lorem. Donec ac ullamcorper sem. Nulla ac
          nisi porta, commodo mauris eu, sagittis quam. Aliquam eros nisl, ultrices quis
          blandit in, facilisis vitae turpis. Sed sagittis hendrerit dui, sit amet euismod
          mauris. Suspendisse potenti. Nullam tempor ex at massa convallis, sed feugiat
          eros ullamcorper. Curabitur erat dolor, pellentesque in ornare placerat, dictum
          vitae lacus. Phasellus mollis sem nibh, blandit consectetur risus dapibus cursus.
          Nam consequat vulputate venenatis. Mauris pulvinar, est et congue lacinia, nisl
          eros pharetra elit, ac fringilla dolor ante sit amet nulla. Maecenas et turpis
          quis mauris scelerisque imperdiet. Praesent posuere mauris feugiat gravida
          mollis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventPage",
};
</script>

<style scoped>

</style>
