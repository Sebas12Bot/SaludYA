export default function Button({ onClick, texto }) {
  return <button onClick={onClick} className='bg-blue-600 text-white px-6 py-2 rounded-lg'>{texto}</button>;
}