const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-center py-1 my-2 text-2xl">
        Contact Us Page
      </h1>
      <form className="flex justify-center flex-col w-6/12 m-auto">
        <input type="text" className="p-2 m-2 border" placeholder="Name" />
        <input type="text"  className="p-2 m-2 border" placeholder="Name" />
        <button className="bg-black text-white w-6/12 m-auto px-3 py-2 rounded-2xl text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
