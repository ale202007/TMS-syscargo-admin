<template>
  <!--begin::Mixed Widget 3-->
  <div :class="widgetClasses" class="card">
    <!--begin::Beader-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Sales Overview</span>

        <span class="text-muted fw-semibold fs-7">Recent sales statistics</span>
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
    <div class="card-body p-0 d-flex flex-column">
      <!--begin::Stats-->
      <div class="card-p pt-5 bg-body flex-grow-1">
        <!--begin::Row-->
        <div class="row g-0">
          <!--begin::Col-->
          <div class="col mr-8">
            <!--begin::Label-->
            <div class="fs-7 text-muted fw-semibold">Average Sale</div>
            <!--end::Label-->

            <!--begin::Stat-->
            <div class="d-flex align-items-center">
              <div class="fs-4 fw-bold">$650</div>
              <KTIcon
                icon-name="arrow-up"
                icon-class="fs-5 text-success d-block ms-1"
              />
            </div>
            <!--end::Stat-->
          </div>
          <!--end::Col-->

          <!--begin::Col-->
          <div class="col">
            <!--begin::Label-->
            <div class="fs-7 text-muted fw-semibold">Commission</div>
            <!--end::Label-->

            <!--begin::Stat-->
            <div class="fs-4 fw-bold">$233,600</div>
            <!--end::Stat-->
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->

        <!--begin::Row-->
        <div class="row g-0 mt-8">
          <!--begin::Col-->
          <div class="col mr-8">
            <!--begin::Label-->
            <div class="fs-7 text-muted fw-semibold">Annual Taxes 2019</div>
            <!--end::Label-->

            <!--begin::Stat-->
            <div class="fs-4 fw-bold">$29,004</div>
            <!--end::Stat-->
          </div>
          <!--end::Col-->

          <!--begin::Col-->
          <div class="col">
            <!--begin::Label-->
            <div class="fs-7 text-muted fw-semibold">Annual Income</div>
            <!--end::Label-->

            <!--begin::Stat-->
            <div class="d-flex align-items-center">
              <div class="fs-4 fw-bold">$1,480,00</div>
              <KTIcon
                icon-name="arrow-down"
                icon-class="fs-5 text-danger ms-1"
              />
            </div>
            <!--end::Stat-->
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->
      </div>
      <!--end::Stats-->

      <!--begin::Chart-->
      <apexchart
        ref="chartRef"
        class="mixed-widget-3-chart card-rounded-bottom"
        :options="chart"
        :series="series"
        :height="chartHeight"
        type="area"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 3-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onBeforeMount, ref, watch } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import { useThemeStore } from "@/stores/theme";
import type { ApexOptions } from "apexcharts";
import type VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "widget-1",
  components: {
    Dropdown1,
  },
  props: {
    widgetClasses: String,
    chartColor: String,
    chartHeight: String,
  },
  setup(props) {
    const chartRef = ref<typeof VueApexCharts | null>(null);
    const chart = ref<ApexOptions>({});
    const store = useThemeStore();

    const series = [
      {
        name: "Net Profit",
        data: [30, 25, 45, 30, 55, 55],
      },
    ];

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
  const labelColor = getCSSVariableValue("--bs-gray-800");
  const strokeColor = getCSSVariableValue("--bs-gray-300");
  const baseColor = getCSSVariableValue(`--bs-${color}`);
  const lightColor = getCSSVariableValue(`--bs-${color}-light`);

  return {
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: height,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: strokeColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val) {
          return "$" + val + " thousands";
        },
      },
    },
    colors: [lightColor],
    markers: {
      colors: [lightColor],
      strokeColors: [baseColor],
      strokeWidth: 3,
    },
  };
};
</script>
