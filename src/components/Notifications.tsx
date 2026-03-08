export default function Notifications() {
  return (
    <div className="max-w-2xl mx-auto pt-4 px-4 pb-20 md:pb-8">
      <h2 className="font-bold text-xl mb-6">Notifications</h2>

      <div className="space-y-4">
        <h3 className="font-semibold text-base mb-2">Today</h3>
        {[1, 2].map((i) => (
          <div key={`today-${i}`} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={`https://picsum.photos/seed/notif${i}/100/100`}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="text-sm">
                <span className="font-semibold">user_{i}</span> started
                following you.
                <span className="text-neutral-500 ml-1">2h</span>
              </span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
              Follow
            </button>
          </div>
        ))}

        <h3 className="font-semibold text-base mb-2 mt-8">This Week</h3>
        {[3, 4, 5, 6].map((i) => (
          <div
            key={`week-${i}`}
            className="flex items-center justify-between mt-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={`https://picsum.photos/seed/notif${i}/100/100`}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="text-sm">
                <span className="font-semibold">dev_guru_{i}</span> liked your
                post.
                <span className="text-neutral-500 ml-1">{i}d</span>
              </span>
            </div>
            <img
              src={`https://picsum.photos/seed/project${i}/100/100`}
              alt="post"
              className="w-10 h-10 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
