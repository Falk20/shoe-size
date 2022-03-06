import React, { useState } from "react";
import {
  europeToMetric,
  metricToEurope,
  metricToStihmass,
  stihmassToMetric,
} from "../../utils/Convert";
import RangeInput from "./RangeInput";

export default function ShoeSizeForm() {
  const [metricSize, setMetricSize] = useState(220);

  function setStihmassSize(value) {
    setMetricSize(stihmassToMetric(value));
  }

  function setEuropeSize(value) {
    setMetricSize(europeToMetric(value));
  }

  return (
    <form>
      <RangeInput
        title={"Метрическая система"}
        min={220}
        max={320}
        step={5}
        value={metricSize}
        onChange={setMetricSize}
      />
      <RangeInput
        title={"Штихмассовая система"}
        min={33}
        max={48}
        step={0.5}
        value={metricToStihmass(metricSize)}
        onChange={setStihmassSize}
      />
      <RangeInput
        title={"Европейская система"}
        min={34}
        max={49.5}
        step={0.5}
        value={metricToEurope(metricSize)}
        onChange={setEuropeSize}
      />
    </form>
  );
}
