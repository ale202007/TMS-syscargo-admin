<template>
  <!--begin::Mixed Widget 4-->
  <div :class="widgetClasses" class="card">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Action Needed</span>
        <span class="text-muted fw-semibold fs-7"
          >Complete your profile setup</span
        >
      </h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <KTIcon icon-name="category" icon-class="fs-2" />
        </button>
        <Dropdown1></Dropdown1>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex flex-column">
      <div class="flex-grow-1">
        <!--begin::Chart-->
        <apexchart
          ref="chartRef"
          class="mixed-widget-4-chart"
          :options="chart"
          :series="series"
          :height="chartHeight"
          type="radialBar"
        ></apexchart>
        <!--end::Chart-->
      </div>

      <div class="pt-5">
        <p class="text-center fs-6 pb-5">
          <span class="badge badge-light-danger fs-8">Notes:</span>&nbsp;
          Current sprint requires stakeholders<br />
          to approve newly amended policies
        </p>

        <a href="#" :class="`btn-${btnColor}`" class="btn w-100 py-3"
          >Take Action</a
        >
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 4-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onBeforeMount, ref, watch } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import type VueApexCharts from "vue3-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useThemeStore } from "@/stores/theme";

export default defineComponent({
  name: "widget-1",
  components: {
    Dropdown1,
  },
  props: {
    widgetClasses: String,
    chartColor: String,
    chartHeight: String,
    btnColor: String,
  },
  setup(props) {
    const chartRef = ref<typeof VueApexCharts | null>(null);
    const chart = ref<ApexOptions>({});
    const store = useThemeStore();

    const series = ref([74]);

    const themeMode = computed(() => {
      return store.mode;
    });

    onBeforeMount(() => {
      Object.assign(
        chart.value,
        chartOptions(props.chartColor, props.chartHeight),
      );
    });

    const refreshChart = () => {
      if (!chartRef.value) {
        return;
      }

      chartRef.value.updateOptions(
        chartOptions(props.chartColor, props.chartHeight),
      );
    };

    watch(themeMode, () => {
      refreshChart();
    });

    return {
      chart,
      series,
      chartRef,
      getAssetPath,
    };
  },
});

const chartOptions = (
  color: string = "primary",
  height: string = "auto",
): ApexOptions => {
  const baseColor = getCSSVariableValue(`--bs-${color}`);
  const lightColor = getCSSVariableValue(`--bs-${color}-light`);
  const labelColor = getCSSVariableValue("--bs-gray-700");

  return {
    chart: {
      fontFamily: "inherit",
      height: height,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "65%",
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
            fontWeight: "700",
          },
          value: {
            color: labelColor,
            fontSize: "30px",
            fontWeight: "700",
            offsetY: 12,
            show: true,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
        track: {
          background: lightColor,
          strokeWidth: "100%",
        },
      },
    },
    colors: [baseColor],
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };
};
</script>
