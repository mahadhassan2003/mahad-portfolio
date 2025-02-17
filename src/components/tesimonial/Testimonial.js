import React, { useState } from 'react';
import Title from '../layouts/Title';

const Testimonials = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0); // Changed to hold number
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  // Handle form submission for testimonials
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setErrMsg("Name is required!");
    } else if (job === "") {
      setErrMsg("Job title is required!");
    } else if (feedback === "") {
      setErrMsg("Feedback is required!");
    } else if (rating === 0) {
      setErrMsg("Rating is required!");
    } else {
      // Save the testimonial
      const newTestimonial = { name, job, feedback, rating };
      setTestimonials([...testimonials, newTestimonial]);

      setSuccessMsg(`Thank you ${name}, your testimonial has been submitted successfully!`);
      setErrMsg("");
      setName("");
      setJob("");
      setFeedback("");
      setRating(0); // Reset rating
    }
  };

  // Function to delete a testimonial with confirmation
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Do you really want to delete this testimonial?");
    if (confirmDelete) {
      const updatedTestimonials = testimonials.filter((_, i) => i !== index);
      setTestimonials(updatedTestimonials);
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <section id="testimonials" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="What Our Clients Say" des="TESTIMONIALS" />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-3xl">
          <div className="w-full h-auto py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-red-500 text-white text-center text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-green-500 text-white text-center text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Job Title</p>
                  <input
                    onChange={(e) => setJob(e.target.value)}
                    value={job}
                    className="contactInput"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Feedback</p>
                <textarea
                  onChange={(e) => setFeedback(e.target.value)}
                  value={feedback}
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Rating</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      className={`cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSubmit}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Submit Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Display Submitted Testimonials */}
      <div className="mt-10">
        <h3 className="text-2xl text-center text-gray-300">Client Testimonials</h3>
        <div className="mt-6 flex flex-col gap-6">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#23272b] p-4 rounded-lg shadow-lg">
                <p className="text-lg text-gray-200 font-semibold">{testimonial.name} ({testimonial.job})</p>
                <p className="text-sm text-gray-400">{testimonial.feedback}</p>
                <p className="text-sm text-yellow-500 mt-2">Rating: {renderStars(testimonial.rating)}</p>
                <button
                  onClick={() => handleDelete(index)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No testimonials submitted yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
