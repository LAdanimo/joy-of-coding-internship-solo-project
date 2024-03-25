import Link from "next/link";

export default function Breadcrumbs() {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/all-todos">All To-Dos</Link>
        </li>
        <li>
          <Link href="/add-todo">Add New To-Do</Link>
        </li>
      </ul>
    </div>
  );
}

/* BOOTSTRAP VERSION:
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">Library</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav>
*/
