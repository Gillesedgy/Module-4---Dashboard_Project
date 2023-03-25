

 
    <div className="mb-4">
      <textarea
        className="bg-transparent text-lg leading-loose focus:outline-none resize-none w-full h-48 border-b-2 border-yellow-700"
        id="content"
        value={note.content}
        placeholder="Click to add text"
        onChange={handleTextChange}
      ></textarea>
    </div>
    <div className="mb-4">
      <label htmlFor="date" className="mr-2 text-yellow-700">Date:</label>
      <input
        className="bg-transparent text-lg focus:outline-none border-b-2 border-yellow-700"
        type="date"
        id="date"
        value={note.date}
        placeholder="Click to add date"
        onChange={handleTextChange}
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="time" className="mr-2 text-yellow-700">Time:</label>
      <input
        className="bg-transparent text-lg focus:outline-none border-b-2 border-yellow-700"
        type="time"
        id="time"
        value={note.time}
        placeholder="Click to add time"
        onChange={handleTextChange}
        required
      />
    </div>
    <div className="flex items-center mb-4">
      <label htmlFor="is_bookmark" className="mr-2 text-yellow-700">Save:</label>
      <input
        className="bg-transparent focus:outline-none"
        type="checkbox"
        id="is_bookmark"
        checked={note.is_bookmark}
        onChange={handleCheckChange}
      />
    </div>
    <button className="bg-yellow-700 hover:bg-yellow-600 p-2 rounded-md w-full" type="submit">Done</button>
  </form>
</div>
