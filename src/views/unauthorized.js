export default function unauthorized() {
  return `
    <div
      class="min-h-screen flex items-center justify-center bg-slate-100"
    >
      <div
        class="bg-white p-8 rounded-lg shadow text-center"
      >
        <h1
          class="text-3xl font-bold text-red-600 mb-4"
        >
          Acceso Denegado
        </h1>

        <p class="text-slate-600">
          No tienes permisos para acceder a esta sección.
        </p>
      </div>
    </div>
  `;
}