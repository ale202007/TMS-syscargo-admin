<template>
  <!--begin::Feeds Widget 5-->
  <div class="card" :class="widgetClasses">
    <!--begin::Body-->
    <div class="card-body pb-0">
      <!--begin::Header-->
      <div class="d-flex align-items-center mb-5">
        <!--begin::User-->
        <div class="d-flex align-items-center flex-grow-1">
          <!--begin::Avatar-->
          <div class="symbol symbol-45px me-5">
            <img :src="getAssetPath('media/avatars/300-25.jpg')" alt="" />
          </div>
          <!--end::Avatar-->

          <!--begin::Info-->
          <div class="d-flex flex-column">
            <a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bold"
              >Sam Logan</a
            >

            <span class="text-gray-500 fw-semibold">Mango, Java, Python</span>
          </div>
          <!--end::Info-->
        </div>
        <!--end::User-->

        <!--begin::Menu-->
        <div class="my-0">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTIcon icon-name="category" icon-class="fs-2" />
          </button>

          <Dropdown2></Dropdown2>
        </div>
        <!--end::Menu-->
      </div>
      <!--end::Header-->

      <!--begin::Post-->
      <div class="mb-5">
        <!--begin::Image-->
        <div
          class="bgi-no-repeat bgi-size-cover rounded min-h-250px mb-5"
          :style="{
            backgroundImage: `url(${getAssetPath(
              '/media/stock/900x600/20.jpg',
            )})`,
          }"
        ></div>
        <!--end::Image-->

        <!--begin::Text-->
        <div class="text-gray-800 mb-5">
          Outlines keep you honest. They stop you from indulging in poorly
          thought-out metaphors about driving and keep you focused on the
          overall structure of your post
        </div>
        <!--end::Text-->

        <!--begin::Toolbar-->
        <div class="d-flex align-items-center mb-5">
          <a
            href="#"
            class="btn btn-sm btn-light btn-color-muted btn-active-light-success px-4 py-2 me-4"
          >
            <KTIcon icon-name="message-text-2" icon-class="fs-3" />
            89
          </a>

          <a
            href="#"
            class="btn btn-sm btn-light btn-color-muted btn-active-light-danger px-4 py-2"
          >
            <KTIcon icon-name="heart" icon-class="fs-2" />
            29
          </a>
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Post-->

      <!--begin::Separator-->
      <div class="separator mb-4"></div>
      <!--end::Separator-->

      <!--begin::Reply input-->
      <form class="position-relative mb-6">
        <textarea
          class="form-control border-0 p-0 pe-10 resize-none min-h-25px"
          data-kt-autosize="true"
          rows="1"
          placeholder="Reply.."
        ></textarea>

        <div class="position-absolute top-0 end-0 me-n5">
          <span class="btn btn-icon btn-sm btn-active-color-primary pe-0 me-2">
            <KTIcon icon-name="paper-clip" icon-class="fs-3 mb-3" />
          </span>

          <span class="btn btn-icon btn-sm btn-active-color-primary ps-0">
            <KTIcon icon-name="geolocation" icon-class="fs-2 mb-3" />
          </span>
        </div>
      </form>
      <!--edit::Reply input-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Feeds Widget 5-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "widget-5",
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown2,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
