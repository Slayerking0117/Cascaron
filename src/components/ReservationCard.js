import { getSession } from "@/utils";

export default function ReservationCard(reservation) {
  const {
    id,
    workspace,
    date,
    startHour,
    endHour,
    reason,
    status,
  } = reservation;

  const user = getSession();

  return `
    <article
      class="bg-white p-4 rounded-lg shadow border"
    >
      <h3 class="font-bold text-lg">
        ${workspace}
      </h3>

      <div class="mt-2 text-sm">

        <p>
          Fecha:
          ${date}
        </p>

        <p>
          Horario:
          ${startHour}
          -
          ${endHour}
        </p>

        <p>
          Motivo:
          ${reason}
        </p>

        <p>
          Estado:
          <span class="font-semibold">
            ${status}
          </span>
        </p>

      </div>

      <div class="flex gap-2 mt-4">

  ${
    user.role === "admin" &&
    status === "pending"
      ? `
      <button
        class="approve-btn bg-green-600 text-white px-3 py-1 rounded"
        data-id="${id}"
      >
        Aprobar
      </button>

      <button
        class="reject-btn bg-red-600 text-white px-3 py-1 rounded"
        data-id="${id}"
      >
        Rechazar
      </button>
      `
      : ""
  }

  ${
    user.role === "user" &&
    (status === "pending" ||
      status === "approved")
      ? `
      <button
        class="cancel-btn bg-orange-500 text-white px-3 py-1 rounded"
        data-id="${id}"
      >
        Cancelar
      </button>
      `
      : ""
  }

  ${
    status === "pending"
      ? `
      <button
        class="edit-btn bg-yellow-500 text-white px-3 py-1 rounded"
        data-id="${id}"
      >
        Editar
      </button>
      `
      : ""
  }

  <button
    class="delete-btn bg-red-500 text-white px-3 py-1 rounded"
    data-id="${id}"
  >
    Eliminar
  </button>

</div>

    </article>
  `;
}