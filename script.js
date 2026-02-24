<<<<<<< HEAD
// Select elements
const workoutForm = document.getElementById('workoutForm');
const workoutList = document.getElementById('workoutList');
const workoutName = document.getElementById('workoutName');
const workoutDuration = document.getElementById('workoutDuration');
const workoutDay = document.getElementById('workoutDay');

// Add Workout
workoutForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Create list item
    const li = document.createElement('li');
    li.textContent = `${workoutName.value} - ${workoutDuration.value} mins (${workoutDay.value})`;

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        workoutList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    workoutList.appendChild(li);

    // Clear inputs
    workoutName.value = '';
    workoutDuration.value = '';
    workoutDay.value = '';
});
workoutForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Create list item
    const li = document.createElement('li');
    li.textContent = `${workoutName.value} - ${workoutDuration.value} mins (${workoutDay.value})`;

    // Add animation class
    li.classList.add('newWorkout');

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        workoutList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    workoutList.appendChild(li);

    // Clear inputs
    workoutName.value = '';
    workoutDuration.value = '';
    workoutDay.value = '';
=======
// Select elements
const workoutForm = document.getElementById('workoutForm');
const workoutList = document.getElementById('workoutList');
const workoutName = document.getElementById('workoutName');
const workoutDuration = document.getElementById('workoutDuration');
const workoutDay = document.getElementById('workoutDay');

// Add Workout
workoutForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Create list item
    const li = document.createElement('li');
    li.textContent = `${workoutName.value} - ${workoutDuration.value} mins (${workoutDay.value})`;

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        workoutList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    workoutList.appendChild(li);

    // Clear inputs
    workoutName.value = '';
    workoutDuration.value = '';
    workoutDay.value = '';
});
workoutForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Create list item
    const li = document.createElement('li');
    li.textContent = `${workoutName.value} - ${workoutDuration.value} mins (${workoutDay.value})`;

    // Add animation class
    li.classList.add('newWorkout');

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        workoutList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    workoutList.appendChild(li);

    // Clear inputs
    workoutName.value = '';
    workoutDuration.value = '';
    workoutDay.value = '';
>>>>>>> f958bf3e72eb208270860570ae60f381af8123e8
});