import React, { useState } from 'react';

export default function TestComponent() {
  const [stuff, setStuff] = useState('');
  const people = ['Drew ', 'Eli ', 'Snoobers ', 'Steve ', 'Mandy ', 'Shiloh'];


  return (
    <div>
      <form>
          <input 
            type='text'
            placeholder='Input stuff here...'
            onChange={(e) => setStuff(e.target.value)}
          />
        </form>
      <table>
        <tbody>{stuff}</tbody>
      </table>
    </div>
  )
};