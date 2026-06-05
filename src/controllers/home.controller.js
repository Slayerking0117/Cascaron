import ReservationCard from "@components/ReservationCard";
import {
  getReservations,
  createReservation,
  deleteReservation,
  updateReservation,
  approveReservation,
  rejectReservation,
  cancelReservation,
} from "@services/reservation.service";
import { getSession } from "@/utils";

export const homeController = async () => {
  const container = document.querySelector(
    "#reservationsContainer"
  );

  const user = getSession();

  const reservations = await getReservations();

  const filteredReservations =
    user.role === "admin"
      ? reservations
      : reservations.filter(
          (reservation) =>
            reservation.userId === user.id
        );

  container.innerHTML =
    filteredReservations?.length
      ? filteredReservations
          .map((reservation) =>
            ReservationCard(reservation)
          )
          .join("")
      : `
        <div class="w-full text-center py-8 col-span-2">
          <p class="text-slate-500">
            No hay reservas disponibles
          </p>
        </div>
      `;

  // Eliminar reserva
  document
    .querySelectorAll(".delete-btn")
    .forEach((button) => {
      button.addEventListener(
        "click",
        async () => {
          const id = button.dataset.id;

          await deleteReservation(id);

          homeController();
        }
      );
    });
  // Editar reserva
    document
  .querySelectorAll(".edit-btn")
  .forEach((button) => {
    button.addEventListener(
      "click",
      async () => {
        const id = button.dataset.id;

        const reservation =
          reservations.find(
            (r) => r.id == id
          );

        const reason = prompt(
          "Nuevo motivo:",
          reservation.reason
        );

        if (!reason) return;

        await updateReservation(id, {
          ...reservation,
          reason,
        });

        homeController();
      }
    );
  });

  // Nueva reserva
  const newReservationBtn =
    document.querySelector(
      "#newReservationBtn"
    );

  if (newReservationBtn) {
    newReservationBtn.addEventListener(
      "click",
      async () => {
        const workspace =
          prompt("Espacio:");

        const date = prompt(
          "Fecha (YYYY-MM-DD):"
        );

        const startHour =
          prompt("Hora inicio:");

        const endHour =
          prompt("Hora fin:");

        const reason =
          prompt("Motivo:");

        if (
          !workspace ||
          !date ||
          !startHour ||
          !endHour ||
          !reason
        ) {
          return;
        }

        const reservations =
          await getReservations();

        const exists =
          reservations.some(
            (reservation) =>
              reservation.workspace ===
                workspace &&
              reservation.date === date &&
              startHour <
                reservation.endHour &&
              endHour >
                reservation.startHour
          );

        if (exists) {
          alert(
            "El espacio ya está reservado en ese horario"
          );
          return;
        }

        await createReservation({
          userId: user.id,
          workspace,
          date,
          startHour,
          endHour,
          reason,
          status: "pending",
        });

        homeController();
      }
    );
  }
    document
    .querySelectorAll(".approve-btn")
    .forEach((button) => {
      button.addEventListener(
        "click",
        async () => {
          await approveReservation(
            button.dataset.id
          );

          homeController();
        }
      );
    });

  document
    .querySelectorAll(".reject-btn")
    .forEach((button) => {
      button.addEventListener(
        "click",
        async () => {
          await rejectReservation(
            button.dataset.id
          );

          homeController();
        }
      );
    });

  document
    .querySelectorAll(".cancel-btn")
    .forEach((button) => {
      button.addEventListener(
        "click",
        async () => {
          await cancelReservation(
            button.dataset.id
          );

          homeController();
        }
      );
    });
};