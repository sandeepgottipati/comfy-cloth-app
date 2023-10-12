const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="leading-none text-4xl font-bold sm:text-6xl tracking-tighter">
          We Love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-wider">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 max-w-2xl mx-auto leading-8 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        consequuntur earum quia, assumenda porro numquam delectus saepe
        doloremque, alias doloribus explicabo soluta. Nemo autem iste fugiat
        minima ad dolorum eos!
      </p>
    </>
  );
};
export default About;
