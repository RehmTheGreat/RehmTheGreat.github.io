/* ── Data ────────────────────────────────────────────────── */
const EXERCISES = [
  // STRETCHES — release tight muscles
  {
    id: 'cat-cow',
    name: 'Cat-Cow Stretch',
    category: 'stretch',
    emoji: '🐱',
    muscle: 'Spine & Lower Back',
    sets: 3,
    reps: 10,
    duration: null,
    sides: false,
    steps: [
      'Start on all fours with wrists under shoulders and knees under hips.',
      'Inhale — drop your belly toward the floor, lift your head and tailbone (cow).',
      'Exhale — round your spine toward the ceiling, tuck chin and pelvis (cat).',
      'Flow slowly and deliberately, matching breath to movement.'
    ],
    tip: 'Focus on tilting the pelvis posteriorly in the cat phase — that is exactly the movement that corrects APT.'
  },
  {
    id: 'childs-pose',
    name: "Child's Pose",
    category: 'stretch',
    emoji: '🧘',
    muscle: 'Lower Back & Glutes',
    sets: 3,
    reps: null,
    duration: 60,
    sides: false,
    steps: [
      'Kneel and sit back onto your heels, then fold forward and extend your arms overhead.',
      'Let your forehead rest on the floor and relax your entire back.',
      'Breathe deeply, allowing your lower back to lengthen on each exhale.',
      'Hold for the full duration without moving.'
    ],
    tip: 'Walk your hands further forward to feel a deeper stretch in the lumbar spine.'
  },
  {
    id: 'hip-flexor-stretch',
    name: 'Kneeling Hip Flexor Stretch',
    category: 'stretch',
    emoji: '🦵',
    muscle: 'Hip Flexors (Psoas)',
    sets: 3,
    reps: null,
    duration: 45,
    sides: true,
    steps: [
      'Kneel on one knee with the other foot forward at 90°.',
      'Tuck your pelvis slightly (posterior tilt) — this intensifies the stretch.',
      'Shift your hips gently forward until you feel a pull in the front of the kneeling hip.',
      'Keep your torso upright and core gently braced. Hold, then switch sides.'
    ],
    tip: 'The posterior pelvic tilt (PPT) during this stretch is critical. Without it, you compensate with the lower back and miss the psoas entirely.'
  },
  {
    id: 'quad-stretch',
    name: 'Standing Quad Stretch',
    category: 'stretch',
    emoji: '🏃',
    muscle: 'Quadriceps & Rectus Femoris',
    sets: 3,
    reps: null,
    duration: 30,
    sides: true,
    steps: [
      'Stand on one leg and bring the opposite heel toward your glute.',
      'Hold your ankle (not your toes) and keep knees together.',
      'Tuck your pelvis (posterior tilt) to deepen the rectus femoris stretch.',
      'Hold steady and switch sides.'
    ],
    tip: 'The rectus femoris crosses both the hip and knee. The PPT cue unlocks its upper portion, which standard quad stretches miss.'
  },
  {
    id: 'pigeon-pose',
    name: 'Pigeon Pose',
    category: 'stretch',
    emoji: '🕊️',
    muscle: 'Hip Flexors & Piriformis',
    sets: 2,
    reps: null,
    duration: 60,
    sides: true,
    steps: [
      'From all fours, bring one knee forward and place it behind the same-side wrist.',
      'Extend the opposite leg straight behind you with the top of the foot on the floor.',
      'Square your hips toward the floor as much as possible.',
      'Fold forward over the front leg, resting on forearms or a block. Hold, then switch.'
    ],
    tip: 'If your hip does not reach the floor, place a folded blanket under it to keep the pelvis level.'
  },

  // STRENGTHENING — activate weak muscles
  {
    id: 'ppt',
    name: 'Posterior Pelvic Tilt',
    category: 'strengthen',
    emoji: '🎯',
    muscle: 'Lower Abs & Glutes',
    sets: 3,
    reps: 15,
    duration: null,
    sides: false,
    steps: [
      'Lie on your back with knees bent and feet flat on the floor.',
      'Flatten your lower back against the floor by contracting your lower abs and glutes simultaneously.',
      'Hold the tilt for 3 seconds, feeling your spine press into the ground.',
      'Release slowly and repeat — this is the exact correction movement for APT.'
    ],
    tip: 'Think of your pelvis as a bowl of water: APT spills it forward. PPT levels the bowl. Practice this movement awareness in sitting and standing throughout your day.'
  },
  {
    id: 'glute-bridge',
    name: 'Glute Bridge',
    category: 'strengthen',
    emoji: '🌉',
    muscle: 'Glutes & Hamstrings',
    sets: 3,
    reps: 15,
    duration: null,
    sides: false,
    steps: [
      'Lie on your back with knees bent, feet hip-width apart.',
      'Drive through your heels and squeeze your glutes to lift your hips.',
      'At the top, tuck your pelvis slightly to fully activate the glutes — do NOT arch your lower back.',
      'Lower slowly over 3 seconds and repeat.'
    ],
    tip: 'Squeeze the glutes hard at the top of each rep. Weak glutes are one of the primary drivers of APT.'
  },
  {
    id: 'dead-bug',
    name: 'Dead Bug',
    category: 'strengthen',
    emoji: '🐛',
    muscle: 'Deep Core (TVA)',
    sets: 3,
    reps: 10,
    duration: null,
    sides: true,
    steps: [
      'Lie on your back with arms pointing toward the ceiling and knees at 90° above hips.',
      'Press your lower back firmly into the floor (PPT) and hold it there throughout.',
      'Slowly lower your right arm and left leg toward the floor, breathing out.',
      'Return and alternate sides — if your back lifts off the floor, reduce range.'
    ],
    tip: 'Speed is the enemy here. Slow, controlled reps with the lower back glued to the floor are the goal.'
  },
  {
    id: 'plank',
    name: 'Forearm Plank',
    category: 'strengthen',
    emoji: '⚡',
    muscle: 'Core & Glutes',
    sets: 3,
    reps: null,
    duration: 30,
    sides: false,
    steps: [
      'Place forearms on the floor with elbows under shoulders, hands forward.',
      'Rise onto your toes, keeping the body in a straight line from head to heels.',
      'Actively tuck your pelvis (posterior tilt) and squeeze your glutes — do not let your hips sag or pike.',
      'Breathe steadily and hold for the full duration.'
    ],
    tip: 'Imagine pulling your elbows toward your feet without them moving — this activates your deep core far more than just holding position.'
  },
  {
    id: 'reverse-crunch',
    name: 'Reverse Crunch',
    category: 'strengthen',
    emoji: '🔄',
    muscle: 'Lower Abs',
    sets: 3,
    reps: 15,
    duration: null,
    sides: false,
    steps: [
      'Lie on your back with legs raised and knees at 90°, hands flat beside you.',
      'Use your lower abs to curl your hips off the floor, bringing knees toward your chest.',
      'At the top your hips and lower back should briefly peel off the floor.',
      'Lower slowly and controlled — do not let momentum take over.'
    ],
    tip: 'The lower abs are the key antagonist to the hip flexors in APT. Strengthening them directly counteracts the anterior pull.'
  },
  {
    id: 'bird-dog',
    name: 'Bird Dog',
    category: 'strengthen',
    emoji: '🐦',
    muscle: 'Glutes & Core Stability',
    sets: 3,
    reps: 10,
    duration: null,
    sides: true,
    steps: [
      'Start on all fours with a neutral spine (not arched or rounded).',
      'Extend your right arm and left leg simultaneously until they are parallel to the floor.',
      'Hold for 2 seconds, return, then switch to left arm and right leg.',
      'Keep your hips level — do not rotate or shift weight.'
    ],
    tip: 'If your lower back arches when you extend the leg, reduce range until strength improves.'
  }
];

// Ordered daily routine (exercise IDs)
const ROUTINE_ORDER = [
  'cat-cow',
  'childs-pose',
  'hip-flexor-stretch',
  'quad-stretch',
  'pigeon-pose',
  'ppt',
  'glute-bridge',
  'dead-bug',
  'plank',
  'reverse-crunch',
  'bird-dog'
];

const TIPS = [
  'When sitting, place a small lumbar pillow behind your lower back and consciously level your pelvis.',
  'Set an hourly reminder to check your posture — APT is mostly a habit of inattention.',
  'Avoid extended sitting. Stand and walk for at least 5 minutes every hour.',
  'When standing in line, gently activate your glutes. This alone resets pelvic alignment.',
  'Sleeping on your back with a pillow under your knees removes strain from your hip flexors overnight.',
  'Avoid excessive lower-back arching during gym exercises like squats and deadlifts.',
  'Building the habit of a daily routine is more valuable than any single perfect session.',
  'Consistency over 8–12 weeks produces lasting structural change. Do not rush the process.'
];

/* ── State & Storage ─────────────────────────────────────── */
function loadState() {
  try {
    return JSON.parse(localStorage.getItem('tiltfix-state') || '{}');
  } catch (_) {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem('tiltfix-state', JSON.stringify(state));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

/* ── Timer ───────────────────────────────────────────────── */
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let currentExerciseId = null;
let currentSet = 0;
let completedSets = 0;

function clearTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerRunning = false;
}

/* ── Navigation ──────────────────────────────────────────── */
let currentView = 'home';

function navigate(view) {
  if (view === currentView) return;
  clearTimer();
  currentView = view;
  document.querySelectorAll('.view').forEach((el) => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach((el) => el.classList.remove('active'));

  const viewEl = document.getElementById('view-' + view);
  if (viewEl) viewEl.classList.add('active');
  const navEl = document.querySelector('[data-view="' + view + '"]');
  if (navEl) navEl.classList.add('active');

  document.getElementById('app').scrollTop = 0;

  renderView(view);
}

function renderView(view) {
  if (view === 'home')      renderHome();
  if (view === 'exercises') renderExercises();
  if (view === 'routine')   renderRoutine();
  if (view === 'progress')  renderProgress();
}

/* ── HOME ─────────────────────────────────────────────────── */
function renderHome() {
  const state = loadState();
  const today = todayKey();
  const completedToday = state.completedToday || {};
  const doneCount = Object.keys(completedToday[today] || {}).length;
  const total = ROUTINE_ORDER.length;
  const pct = Math.round((doneCount / total) * 100);

  // Streak
  const streak = calcStreak(state);

  // Tip of the day (cycle by day-of-year)
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const tip = TIPS[dayOfYear % TIPS.length];

  // Greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  const circumference = 2 * Math.PI * 30;
  const offset = circumference - (pct / 100) * circumference;

  document.getElementById('home-content').innerHTML = `
    <div class="home-hero">
      <div class="home-greeting">${greeting} 👋</div>
      <div class="home-title">Fix Your Anterior<br>Pelvic Tilt</div>

      <div class="progress-ring-wrap">
        <div class="ring-container">
          <svg class="ring-svg" width="72" height="72" viewBox="0 0 72 72">
            <circle class="ring-track" cx="36" cy="36" r="30"/>
            <circle class="ring-fill" cx="36" cy="36" r="30"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${offset}"/>
          </svg>
          <div class="ring-text">
            <span class="ring-pct">${pct}%</span>
            <span class="ring-lbl">DONE</span>
          </div>
        </div>
        <div class="ring-info">
          <div class="done">${doneCount} / ${total}</div>
          <div class="total">exercises done</div>
          <div class="label">Today's routine</div>
        </div>
      </div>

      <button class="btn-start" onclick="navigate('routine')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
        ${doneCount === 0 ? 'Start Today\'s Routine' : doneCount === total ? 'View Completed Routine' : 'Continue Routine'}
      </button>
    </div>

    <div class="section mt-16">
      <div class="section-title">Your streak</div>
      <div class="card streak-card">
        <div class="streak-icon">🔥</div>
        <div class="streak-info">
          <div class="streak-count">${streak} day${streak !== 1 ? 's' : ''}</div>
          <div class="streak-label">Current streak</div>
          <div class="streak-sub">${streak === 0 ? 'Complete today\'s routine to start your streak!' : 'Keep it up — consistency is everything.'}</div>
        </div>
      </div>
    </div>

    <div class="section mt-12">
      <div class="section-title">Daily tip</div>
      <div class="card tip-card">
        <div class="tip-icon">💡</div>
        <div>
          <h4>Posture Tip</h4>
          <p>${tip}</p>
        </div>
      </div>
    </div>

    <div class="section mt-12">
      <div class="section-title">What is Anterior Pelvic Tilt?</div>
      <div class="card info-card">
        <h3>The Postural Imbalance</h3>
        <p>Anterior pelvic tilt (APT) is a postural dysfunction where the front of the pelvis drops and the back rises, creating an exaggerated lower-back arch. It is caused by a muscle imbalance between tight and weak groups.</p>
        <div class="apt-diagram">
          <div class="apt-col tight">
            <div class="apt-col-title">Tight → Stretch</div>
            <ul>
              <li>Hip Flexors</li>
              <li>Quadriceps</li>
              <li>Lower Back</li>
            </ul>
          </div>
          <div class="apt-col weak">
            <div class="apt-col-title">Weak → Strengthen</div>
            <ul>
              <li>Glutes</li>
              <li>Hamstrings</li>
              <li>Core / Abs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── EXERCISES ────────────────────────────────────────────── */
let exerciseFilter = 'all';

function renderExercises() {
  const filtered = exerciseFilter === 'all'
    ? EXERCISES
    : EXERCISES.filter((e) => e.category === exerciseFilter);

  document.getElementById('exercises-content').innerHTML = `
    <div class="filter-bar">
      <button class="filter-chip ${exerciseFilter === 'all' ? 'active' : ''}" onclick="setFilter('all')">All</button>
      <button class="filter-chip ${exerciseFilter === 'stretch' ? 'active' : ''}">
        <span class="dot" style="background:#4A7FB5"></span>
        <span onclick="setFilter('stretch')">Stretch & Release</span>
      </button>
      <button class="filter-chip ${exerciseFilter === 'strengthen' ? 'active' : ''}">
        <span class="dot" style="background:#2F7A58"></span>
        <span onclick="setFilter('strengthen')">Strengthen & Activate</span>
      </button>
    </div>
    <div class="exercises-list">
      ${filtered.map((ex) => exerciseCardHTML(ex)).join('')}
    </div>
  `;
}

function setFilter(f) {
  exerciseFilter = f;
  renderExercises();
}

function exerciseCardHTML(ex) {
  const stat1 = ex.duration
    ? `<div class="stat-pill"><div class="sv">${ex.duration}s</div><div class="sl">Duration</div></div>`
    : `<div class="stat-pill"><div class="sv">${ex.reps}</div><div class="sl">${ex.sides ? 'Reps/Side' : 'Reps'}</div></div>`;

  return `
    <div class="exercise-card" id="ec-${ex.id}">
      <div class="exercise-card-header" onclick="toggleCard('${ex.id}')">
        <div class="exercise-icon ${ex.category}">${ex.emoji}</div>
        <div class="exercise-meta">
          <div class="exercise-name">${ex.name}</div>
          <div class="exercise-tags">
            <span class="tag ${ex.category}">${ex.category === 'stretch' ? 'Stretch' : 'Strengthen'}</span>
            <span class="tag muscle">${ex.muscle}</span>
          </div>
        </div>
        <svg class="exercise-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div class="exercise-body">
        <div class="exercise-stats">
          <div class="stat-pill"><div class="sv">${ex.sets}</div><div class="sl">Sets</div></div>
          ${stat1}
          ${ex.sides ? '<div class="stat-pill"><div class="sv">2</div><div class="sl">Sides</div></div>' : ''}
        </div>
        <ol class="exercise-steps">
          ${ex.steps.map((s, i) => `<li><span class="step-num">${i + 1}</span><span>${s}</span></li>`).join('')}
        </ol>
        <div class="exercise-tip">
          <span>💡</span>
          <span>${ex.tip}</span>
        </div>
      </div>
    </div>
  `;
}

function toggleCard(id) {
  const card = document.getElementById('ec-' + id);
  if (card) card.classList.toggle('open');
}

/* ── ROUTINE ──────────────────────────────────────────────── */
function renderRoutine() {
  const state = loadState();
  const today = todayKey();
  const completedToday = (state.completedToday || {})[today] || {};
  const doneCount = Object.keys(completedToday).length;
  const allDone = doneCount === ROUTINE_ORDER.length;

  if (allDone) {
    renderRoutineComplete(state);
    return;
  }

  // Find first not-done exercise as active
  const activeId = currentExerciseId
    || ROUTINE_ORDER.find((id) => !completedToday[id])
    || null;
  if (!currentExerciseId) currentExerciseId = activeId;

  const activeEx = activeId ? EXERCISES.find((e) => e.id === activeId) : null;

  document.getElementById('routine-content').innerHTML = `
    <div class="routine-header-card card">
      <h2>Today's Routine</h2>
      <p>${doneCount} of ${ROUTINE_ORDER.length} exercises completed</p>
    </div>
    ${activeEx ? timerCardHTML(activeEx) : ''}
    <div class="routine-list">
      ${ROUTINE_ORDER.map((id, idx) => routineItemHTML(id, idx, completedToday, activeId)).join('')}
    </div>
    <div style="padding:0 20px">
      <button class="btn-text" onclick="resetRoutine()">↩ Reset Today's Progress</button>
    </div>
  `;

  if (activeEx && activeEx.duration) {
    initTimer(activeEx);
  }
}

function routineItemHTML(id, idx, completedToday, activeId) {
  const ex = EXERCISES.find((e) => e.id === id);
  if (!ex) return '';
  const done = !!completedToday[id];
  const isActive = id === activeId && !done;
  const detail = ex.duration
    ? `${ex.sets} sets × ${ex.duration}s${ex.sides ? ' per side' : ''}`
    : `${ex.sets} sets × ${ex.reps} reps${ex.sides ? ' per side' : ''}`;

  return `
    <div class="routine-item ${done ? 'completed-item' : ''} ${isActive ? 'active-item' : ''}"
         onclick="selectRoutineExercise('${id}')">
      <div class="routine-item-num">${done ? '✓' : idx + 1}</div>
      <div class="routine-item-info">
        <div class="routine-item-name">${ex.emoji} ${ex.name}</div>
        <div class="routine-item-detail">${detail}</div>
      </div>
      <div class="routine-item-status">${done ? '✅' : isActive ? '▶' : ''}</div>
    </div>
  `;
}

function selectRoutineExercise(id) {
  const state = loadState();
  const today = todayKey();
  const completedToday = (state.completedToday || {})[today] || {};
  if (completedToday[id]) return; // already done

  clearTimer();
  currentExerciseId = id;
  completedSets = 0;
  currentSet = 1;
  renderRoutine();
}

function timerCardHTML(ex) {
  if (ex.duration) {
    const display = formatTime(ex.duration);
    const detail = `${ex.sets} sets · ${ex.duration}s${ex.sides ? ' each side' : ''}`;
    return `
      <div class="timer-card">
        <div class="timer-exercise-name">${ex.emoji} ${ex.name}</div>
        <div class="timer-exercise-meta">${detail}</div>
        <div class="timer-display" id="timer-display">${display}</div>
        <div class="timer-label" id="timer-label">Set ${completedSets + 1} of ${ex.sets}</div>
        <div class="set-indicators">
          ${Array.from({ length: ex.sets }, (_, i) => `
            <div class="set-dot ${i < completedSets ? 'done' : i === completedSets ? 'current' : ''}"></div>
          `).join('')}
        </div>
        <div class="timer-controls">
          <button class="btn-icon" onclick="resetCurrentTimer()" title="Reset">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="1 4 1 10 7 10"/>
              <path d="M3.51 15a9 9 0 1 0 .49-3.87"/>
            </svg>
          </button>
          <button class="btn-icon primary" id="play-pause-btn" onclick="toggleTimer()">
            <svg id="play-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </button>
          <button class="btn-icon done-btn" onclick="markSetDone('${ex.id}')" title="Mark set done">✓</button>
        </div>
      </div>
    `;
  } else {
    const detail = `${ex.sets} sets · ${ex.reps} reps${ex.sides ? ' each side' : ''}`;
    return `
      <div class="timer-card">
        <div class="timer-exercise-name">${ex.emoji} ${ex.name}</div>
        <div class="timer-exercise-meta">${detail}</div>
        <div class="reps-display">${ex.reps}</div>
        <div class="reps-label">reps${ex.sides ? ' each side' : ''}</div>
        <div class="set-indicators">
          ${Array.from({ length: ex.sets }, (_, i) => `
            <div class="set-dot ${i < completedSets ? 'done' : i === completedSets ? 'current' : ''}"></div>
          `).join('')}
        </div>
        <div class="timer-label" id="timer-label">Set ${completedSets + 1} of ${ex.sets}</div>
        <div class="timer-controls">
          <button class="btn-icon done-btn" style="width:auto;padding:0 24px;border-radius:999px;font-size:15px;font-weight:700;"
            onclick="markSetDone('${ex.id}')">
            Set Done ✓
          </button>
        </div>
      </div>
    `;
  }
}

function initTimer(ex) {
  timerSeconds = ex.duration;
  updateTimerDisplay();
}

function toggleTimer() {
  if (timerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  timerRunning = true;
  const btn = document.getElementById('play-pause-btn');
  if (btn) btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16"/>
      <rect x="14" y="4" width="4" height="16"/>
    </svg>`;

  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerDisplay();
    } else {
      clearTimer();
      const ex = EXERCISES.find((e) => e.id === currentExerciseId);
      if (ex) markSetDone(ex.id);
    }
  }, 1000);
}

function pauseTimer() {
  clearTimer();
  const btn = document.getElementById('play-pause-btn');
  if (btn) btn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>`;
}

function resetCurrentTimer() {
  clearTimer();
  const ex = EXERCISES.find((e) => e.id === currentExerciseId);
  if (ex && ex.duration) {
    timerSeconds = ex.duration;
    updateTimerDisplay();
  }
  const btn = document.getElementById('play-pause-btn');
  if (btn) btn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>`;
}

function updateTimerDisplay() {
  const el = document.getElementById('timer-display');
  if (el) el.textContent = formatTime(timerSeconds);
}

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return m > 0 ? `${m}:${String(s).padStart(2, '0')}` : `${s}`;
}

function markSetDone(exerciseId) {
  clearTimer();
  const ex = EXERCISES.find((e) => e.id === exerciseId);
  if (!ex) return;

  completedSets++;

  if (completedSets >= ex.sets) {
    // Exercise fully complete
    const state = loadState();
    const today = todayKey();
    if (!state.completedToday) state.completedToday = {};
    if (!state.completedToday[today]) state.completedToday[today] = {};
    state.completedToday[today][exerciseId] = true;

    // Advance streak
    state.lastCompleted = today;
    saveState(state);

    // Move to next exercise
    const remaining = ROUTINE_ORDER.filter((id) => !state.completedToday[today][id]);
    currentExerciseId = remaining.length > 0 ? remaining[0] : null;
    completedSets = 0;
    currentSet = 1;

    renderRoutine();
  } else {
    // Next set
    timerSeconds = ex.duration || 0;
    renderRoutine();
  }
}

function resetRoutine() {
  const state = loadState();
  const today = todayKey();
  if (state.completedToday) delete state.completedToday[today];
  saveState(state);
  clearTimer();
  currentExerciseId = null;
  completedSets = 0;
  renderRoutine();
}

function renderRoutineComplete(state) {
  document.getElementById('routine-content').innerHTML = `
    <div class="routine-complete-banner">
      <div class="rbc-icon">🎉</div>
      <div>
        <h3>Routine Complete!</h3>
        <p>Great work. Your body thanks you. Come back tomorrow to keep your streak alive.</p>
      </div>
    </div>
    <div class="routine-list">
      ${ROUTINE_ORDER.map((id, idx) => routineItemHTML(id, idx, (state.completedToday || {})[todayKey()] || {}, null)).join('')}
    </div>
    <div style="padding:0 20px">
      <button class="btn-text" onclick="resetRoutine()">↩ Reset Today's Progress</button>
    </div>
  `;
}

/* ── PROGRESS ─────────────────────────────────────────────── */
function renderProgress() {
  const state = loadState();
  const streak = calcStreak(state);
  const sessions = totalSessions(state);
  const daysTracked = daysSinceStart(state);
  const weekData = getWeekData(state);

  document.getElementById('progress-content').innerHTML = `
    <div class="section mt-16">
      <div class="section-title">Overview</div>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="sc-icon">🔥</div>
          <div class="sc-value">${streak}</div>
          <div class="sc-label">Day Streak</div>
        </div>
        <div class="stat-card">
          <div class="sc-icon">✅</div>
          <div class="sc-value">${sessions}</div>
          <div class="sc-label">Sessions Done</div>
        </div>
        <div class="stat-card">
          <div class="sc-icon">📅</div>
          <div class="sc-value">${daysTracked}</div>
          <div class="sc-label">Days Tracked</div>
        </div>
        <div class="stat-card">
          <div class="sc-icon">💪</div>
          <div class="sc-value">${sessions > 0 ? Math.min(Math.round((sessions / Math.max(daysTracked, 1)) * 100), 100) : 0}%</div>
          <div class="sc-label">Consistency</div>
        </div>
      </div>
    </div>

    <div class="section mt-16">
      <div class="section-title">This Week</div>
      <div class="card">
        <div class="week-grid">
          ${weekData.map((d) => `
            <div class="week-day">
              <div class="week-day-label">${d.label}</div>
              <div class="week-day-dot ${d.done ? 'done' : ''} ${d.today ? 'today' : ''}">${d.date}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="section mt-16">
      <div class="section-title">Lifestyle Tips</div>
      <div class="tips-list">
        <div class="lifestyle-tip">
          <div class="lt-icon">🪑</div>
          <div>
            <div class="lt-title">Sitting Posture</div>
            <div class="lt-desc">Sit with feet flat, knees at 90°, and a small lumbar support. Avoid letting your pelvis tuck under (slumping) or arch excessively.</div>
          </div>
        </div>
        <div class="lifestyle-tip">
          <div class="lt-icon">🚶</div>
          <div>
            <div class="lt-title">Walking Gait</div>
            <div class="lt-desc">Push off with your toes and drive your hip through on each stride. Lazy hip extension is a sign of weak glutes contributing to APT.</div>
          </div>
        </div>
        <div class="lifestyle-tip">
          <div class="lt-icon">🏋️</div>
          <div>
            <div class="lt-title">Gym Exercises</div>
            <div class="lt-desc">Avoid over-arching in squats and deadlifts. Cue "ribs down, pelvis neutral" to protect the lower back and build correct patterns.</div>
          </div>
        </div>
        <div class="lifestyle-tip">
          <div class="lt-icon">😴</div>
          <div>
            <div class="lt-title">Sleep Position</div>
            <div class="lt-desc">Back sleepers: put a pillow under your knees. Side sleepers: put a pillow between your knees. Both positions reduce overnight hip flexor shortening.</div>
          </div>
        </div>
        <div class="lifestyle-tip">
          <div class="lt-icon">⏱️</div>
          <div>
            <div class="lt-title">Timeline</div>
            <div class="lt-desc">With daily practice, most people notice meaningful improvement in 6–8 weeks and significant correction by 12 weeks. Consistency beats intensity.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── Helpers ─────────────────────────────────────────────── */
function calcStreak(state) {
  const completedToday = state.completedToday || {};
  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const done = completedToday[key];
    if (done && Object.keys(done).length === ROUTINE_ORDER.length) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

function totalSessions(state) {
  const completedToday = state.completedToday || {};
  return Object.values(completedToday).filter(
    (d) => d && Object.keys(d).length === ROUTINE_ORDER.length
  ).length;
}

function daysSinceStart(state) {
  const completedToday = state.completedToday || {};
  const dates = Object.keys(completedToday).sort();
  if (dates.length === 0) return 0;
  const first = new Date(dates[0]);
  const now = new Date();
  return Math.floor((now - first) / 86400000) + 1;
}

function getWeekData(state) {
  const completedToday = state.completedToday || {};
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Get Mon–Sun of current week
  const dayOfWeek = today.getDay(); // 0=Sun
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    const isToday = d.getTime() === today.getTime();
    const done = completedToday[key]
      && Object.keys(completedToday[key]).length === ROUTINE_ORDER.length;
    return {
      label: ['M', 'T', 'W', 'T', 'F', 'S', 'S'][i],
      date: d.getDate(),
      done,
      today: isToday
    };
  });
}

/* ── PWA Install ─────────────────────────────────────────── */
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const banner = document.getElementById('install-banner');
  if (banner) banner.classList.add('show');
});

function installApp() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(() => {
    deferredInstallPrompt = null;
    dismissInstall();
  });
}

function dismissInstall() {
  const banner = document.getElementById('install-banner');
  if (banner) banner.classList.remove('show');
}

/* ── Boot ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  // Wire up navigation
  document.querySelectorAll('.nav-item').forEach((btn) => {
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });

  // Initial render
  renderView('home');
});
