import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-semibold mb-4">Contact</h3>
      <div className="bg-white p-6 rounded-md shadow-sm w-full sm:max-w-2xl">
        <p className="text-sm md:text-base">Interested in working together? Reach out via email or LinkedIn.</p>
        <ul className="mt-4 text-sm md:text-base space-y-1">
          <li><strong>Email:</strong> vidhyasuri97@gmail.com</li>
          <li><strong>Phone:</strong> (+91) 9159448195</li>
<li>
  <strong>LinkedIn:</strong>{" "}
  <a
    href="https://www.linkedin.com/in/vidhya-s-92884b27b"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    https://www.linkedin.com/in/vidhya-s-92884b27b
  </a>
</li>
<li>
  <strong>GitHub:</strong>{" "}
  <a
    href="https://github.com/Vidhya0501"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    https://github.com/Vidhya0501
  </a>
</li>

        </ul>
      </div>
    </section>
  )
}
