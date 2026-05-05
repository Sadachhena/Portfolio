export default function ProjectCard({ img, title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl overflow-hidden bg-black/60 hover:scale-105 transition"
    >
     <img
  src={img}
  alt={title}
  className="w-full h-[180px] object-contain bg-black"
/>
      <div className="p-4">
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
    </a>
  );
}