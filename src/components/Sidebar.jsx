const Sidebar = () => {
  return (
    <aside className='bg-slate-200 w-80 p-6'>
      <h1 className='text-4xl text-center my-6'>Header</h1>
      <div className='text-center'>Front-end developer</div>
      <p className='my-2'>
        I work happily in the intersection of science, art and programming.
      </p>
      <div>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
