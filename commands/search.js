"use strict";

const axios = require("axios");

function formatEmployeeMessage(emp = {}) {
  const indirectSuperior =
    (emp.indirect_superior || []).map((sup) => sup.name ?? "-").join(", ") ||
    "-";

  return `
<b>Name:</b> ${emp.name ?? "-"}
<b>Email:</b> ${emp.email ?? "-"}
<b>Personal Email:</b> ${emp.personal_email ?? "-"}
<b>Position:</b> ${emp.position ?? "-"}
<b>Department:</b> ${
    (emp.departments || []).map((e) => e?.name).join(",") || "-"
  }
<b>Location:</b> ${emp.location?.name ?? "-"}
<b>Company:</b> ${emp.company?.name ?? "-"}
<b>Employee Code:</b> ${emp.employee_code ?? "-"}
<b>Date of Joining:</b> ${emp.date_of_joining?.split("T")[0] ?? "-"}
<b>Phone No:</b> ${emp.phone_no ?? "-"}
<b>Religion:</b> ${emp.religion ?? "-"}
<b>Nationality:</b> ${emp.nationality ?? "-"}
<b>Marital Status:</b> ${emp.marital_status ?? "-"}
<b>Age:</b> ${emp.age ?? "-"}
<b>Age Range:</b> ${emp.age_range ?? "-"}
<b>Gender:</b> ${emp.gender ?? "-"}
<b>Birth Place:</b> ${emp.birth_place ?? "-"}
<b>Date of Birth:</b> ${emp.date_of_birth?.split("T")[0] ?? "-"}
<b>Identity Number:</b> ${emp.identity_number ?? "-"}
<b>Family Card Number:</b> ${emp.family_card_number ?? "-"}
<b>NPWP Number:</b> ${emp.npwp_number ?? "-"}
<b>BPJS Kesehatan Number:</b> ${emp.bpjs_kesehatan_number ?? "-"}
<b>BPJS Ketenagakerjaan Number:</b> ${emp.bpjs_ketenagakerjaan_number ?? "-"}
<b>Job Type:</b> ${emp.job_type?.name ?? "-"}
<b>Job Status:</b> ${emp.job_status ?? "-"}
<b>Job Grading:</b> ${emp.job_grading ?? "-"}
<b>Direct Superior:</b> ${emp.direct_superior?.name ?? "-"}
<b>Indirect Superior:</b> ${indirectSuperior}
<b>Onboarding Status:</b> ${emp.onboarding_status ?? "-"}
<b>Offboarding Status:</b> ${emp.offboarding_status ?? "-"}
<b>Is Onboard:</b> ${emp.is_onboard ? "✅ Yes" : "❌ No"}
<b>Is Verified by Employee:</b> ${emp.is_verified_by_employee ? "✅" : "❌"}
<b>Is Verified by HR:</b> ${emp.is_verified_by_hr ? "✅" : "❌"}
<b>Is Deleted:</b> ${emp.is_deleted ? "✅" : "❌"}
<b>Is LMS Admin:</b> ${emp.is_lms_admin ? "✅" : "❌"}
<b>Is LMS Trainee:</b> ${emp.is_lms_trainee ? "✅" : "❌"}
<b>Soco Info:</b> ${emp.soco_info?.user_name ?? "-"} (${
    emp.soco_info?.email ?? "-"
  })
<b>Notes:</b> ${emp.notes ?? "-"}
<b>ID Card Address:</b> ${emp.id_card_address ?? "-"}
<b>Passport Address:</b> ${emp.passport_address ?? "-"}
<b>Home Number:</b> ${emp.home_number ?? "-"}
<b>Deactivate Date:</b> ${emp.deactivate_date ?? "-"}
<b>Created At:</b> ${emp.created_at?.split("T")[0] ?? "-"}
<b>Updated At:</b> ${emp.updated_at?.split("T")[0] ?? "-"}
<b>Phone Number:</b> ${emp.phone_no ?? "-"}
`.trim();
}

module.exports = function search(bot, chatId, name) {
  const url = new URL("https://shield-api.sociolla.info/employees");
  url.searchParams.set(
    "filter",
    JSON.stringify({ name: { $regex: name, $options: "i" } })
  );
  url.searchParams.set("limit", 1);

  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url.toString(),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMDdjNjU0YTJlNWVjYWI4NWJkN2UwOSIsInJvbGVzIjpbInN1cGVyYWRtaW4iXX0sImlhdCI6MTcwOTUyMzY3NiwibmJmIjoxNzA5NTIzNjg2LCJleHAiOjE3MDk2MTAwNzYsImlzcyI6InNoaWVsZC1hdXRoLnNvY2lvbGxhLmluZm8ifQ.unjvvHPC1yHQOIfSv5Wvr-GdpkFoZronWBK8sYziVE4HATHKt-xqJw6X44Ch64bagaW8dOk7b_yN_QH8GEJepQ",
    },
  };

  axios
    .request(config)
    .then((res) => {
      const [emp] = res.data?.data || [];
      const msg = formatEmployeeMessage(emp);
      bot.sendMessage(chatId, msg, { parse_mode: "HTML" });
    })
    .catch((err) => {
      bot.sendMessage(chatId, `error`);
      console.error(err);
    });
};
