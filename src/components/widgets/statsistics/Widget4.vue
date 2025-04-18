<template>
  <!--begin::Statistics Widget 4-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body p-0">
      <div class="d-flex flex-stack card-p flex-grow-1">
        <span class="symbol symbol-50px me-2">
          <span :class="`symbol-label bg-light-${color}`">
            <KTIcon :icon-name="iconName" :icon-class="`text-${color} fs-2x`" />
          </span>
        </span>

        <div class="d-flex flex-column text-end">
          <span class="text-gray-900 fw-bold fs-2">{{ change }}</span>

          <span class="text-muted fw-semibold mt-1">{{ description }}</span>
        </div>
      </div>

      <!--begin::Chart-->
      <apexchart
        ref="chartRef"
        class="statistics-widget-4-chart card-rounded-bottom"
        :options="chart"
        :series="series"
        :height="height"
        type="area"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Statistics Widget 4-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onBeforeMount, ref, watch } from "vue";
import { useThemeStore } from "@/stores/theme";
import type { ApexOptions } from "apexcharts";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import type VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "kt-widget-4",
  props: {
    widgetClasses: String,
    iconName: String,
    color: String,
    change: String,
    description: String,
    height: String,
  },
  components: {},
  setup(props) {
    const chartRef = ref<typeof VueApexCharts | null>(null);
    const chart = ref<ApexOptions>({});
    const store = useThemeStore();

    const series = [
      {
        name: "Net Profit",
        data: [40, 40, 30, 30, 35, 35, 50],
      },
    ];

    const themeMode = computed(() => {
      return store.mode;
    });

    onBeforeMount(() => {
      Object.assign(chart.value, chartOptions(props.color, props.height));
    });

    const refreshChart = () => {
      if (!chartRef.value) {
        return;
      }

      chartRef.value.updateOptions(chartOptions(props.color, props.height));
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
  const baseColor = getCSSVariableValue(`--bs-${color}`);
  const lightColor = getCSSVariableValue(`--bs-light-${color}`);

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
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
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
          color: "#E4E6EF",
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
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 100],
      },
    },
    colors: [baseColor],
    markers: {
      colors: [baseColor],
      strokeColors: [lightColor],
      strokeWidth: 3,
    },
  };
};
</script>
