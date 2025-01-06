# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by improperly updating state within the effect's callback.  The `bug.js` file contains the erroneous code. The `bugSolution.js` file shows the corrected code.

## Bug Description

The `useEffect` hook in `bug.js` attempts to reset the `count` state to 0 when it exceeds 5. However, this creates an infinite loop because each state update triggers a re-render, leading to the effect running again and again. The conditional check always succeeds.