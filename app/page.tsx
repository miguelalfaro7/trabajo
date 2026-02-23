export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">

      {/* Titulo */}
      <h1 className="text-3xl font-semibold mb-8">Events</h1>

      <div className="space-y-6">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">

          <div className="flex items-center gap-6">

            <div className="bg-gray-200 rounded-xl p-4 w-24 text-center">
              <p className="text-xs text-gray-500">TODAY</p>
              <p className="text-2xl font-bold">17:00</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Bergen International Film Festival
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.
              </p>
            </div>

          </div>

          <p className="text-sm text-gray-500 cursor-pointer">
            + Add to calendar
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">

          <div className="flex items-center gap-6">

            <div className="bg-pink-100 rounded-xl p-4 w-24 text-center">
              <p className="text-xs text-gray-500">22 - 31 OCT</p>
              <p className="text-2xl font-bold">10:00</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Wool week
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                ULVEKA 2021 will be held for the eighth time in the period 22 - 31 October 2021, and will take place in the entire Bergen region.
              </p>
            </div>

          </div>

          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
            + Add to calendar
          </button>

        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">

          <div className="flex items-center gap-6">

            <div className="bg-yellow-100 rounded-xl p-4 w-24 text-center">
              <p className="text-xs text-gray-500">22 - 31 OCT</p>
              <p className="text-2xl font-bold">19:00</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Light park at Bergenhus Fortress
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                LUMAGICA - a magical experience for young and old at Bergenhus Fortress, 12 November to 19 December 2021.
              </p>
            </div>

          </div>

          <p className="text-sm text-gray-500 cursor-pointer">
            + Add to calendar
          </p>

        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">

          <div className="flex items-center gap-6">

            <div className="bg-green-100 rounded-xl p-4 w-24 text-center">
              <p className="text-xs text-gray-500">13 - 31 DEC</p>
              <p className="text-2xl font-bold">10:00</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Gingerbread City 2021
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                The world's largest Gingerbread Town can be found in the Xhibition shopping center, right in the center of Bergen.
              </p>
            </div>

          </div>

          <p className="text-sm text-gray-500 cursor-pointer">
            + Add to calendar
          </p>

        </div>

      </div>

    </main>
  );
}