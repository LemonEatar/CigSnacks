export default function Page() {
  return (
    <div className="flex">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34727.772383258474!2d11.327743083522902!3d48.120058651200104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1706779750630!5m2!1sde!2sde"
        width="600"
        height="450"
        className="border-0 w-full h-screen"
        loading="lazy"
      ></iframe>
    </div>
  );
}
