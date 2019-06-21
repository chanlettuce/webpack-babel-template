import "bootstrap/dist/css/bootstrap.min.css";
import "../css/json-sorter.css";
import $ from "jquery";
import "bootstrap";
import { methods } from "./methods";

$(() => {
  // 実行ボタン
  $("#sort").click(() => {
    try {
      const beforeObj = JSON.parse($("#input-json").val());
      const afterObj = methods.objectSort(inputObj);
      $("#output-json").val(JSON.stringify(sorted, null, 2));
    } catch (e) {
      console.error(e);
      $("#error-message").text(e.message);
    }
  });

  // 削除ボタン
  $("#erase").click(() => {
    $("#input-json").val("");
    $("#output-json").val("");
  });
});
