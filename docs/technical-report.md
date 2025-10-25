# Technical Report – SWE 363 Assignment 2   

## 1. Introduction  
This technical report details the implementation of the portfolio web application developed for SWE 363 Assignment 2. The goal was to build a responsive portfolio site that demonstrates interactive features such as theme toggling capability, time-sensitive greeting logic, and a simple contact form (frontend only).  

## 2. Requirements & Scope  
### 2.1 Functional Requirements  
- Display “About”, “Projects”, “Skills”, and “Contact” sections  
- Allow user to toggle between dark and light themes  
- Show a greeting message based on the current time of day (morning, afternoon, evening)  
- Provide a contact form for user input (frontend only)  
- Showcase portfolio projects and skills in an organized manner  

### 2.2 Non-Functional Requirements  
- Responsive across devices (mobile, tablet, desktop)  
- Clean, maintainable code structure  
- Use of modern JS/CSS practices  
- Use of AI tools to assist development (ChatGPT, Codex)  

## 3. Design & Architecture  
### 3.1 Overview  
The application follows a component-based architecture (using React). Each major section (“About”, “Projects”, etc.) is encapsulated in its own component. Theme state is managed at the top level and propagated via context or props.  

### 3.2 Theme Toggle Design  
- Theme state variable stored in top-level component (App)  
- Theme switch UI (toggle button) updates the state  
- CSS variables used to apply theme colors globally  

### 3.3 Time-based Greeting Logic  
- On component mount, compute current hour (local time)  
- If hour < 12 → “Good morning”, if < 18 → “Good afternoon”, else “Good evening”  
- Greeting displayed in the “About” or header section  

### 3.4 Contact Form  
- Basic form component: name, email, message fields  
- Frontend validation (required fields, email format)  
- No backend submission  

### 3.5 Responsiveness & Layout  
- CSS Media queries for small, medium, large breakpoints  
- Flexbox and/or CSS Grid used for layout  
- Mobile first design: single column, then multi-column at larger widths  

## 4. Implementation Details  
- Source code in `src/` directory, with subfolders for components, styles, and assets  
- Theme styles: CSS variables switched based on a class on the `body` or root element  
- Greeting logic:
  ```js
  const hour = new Date().getHours();
  let greeting = "";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";
- Contact form: simple form with input and textarea; on submit, validation runs and then displays “Thank you for reaching out!” message

## 5. Testing & Validation

- Verified responsiveness by resizing browser window 

- Theme toggle tested across components

- Greeting message verified across times of day

- Contact form validated for required fields and email format

## 6. Challenges & Solutions

- Challenge: Ensuring theme switch persists across page reloads
- Solution: Store theme in localStorage


- Challenge: Layout issues on small screens
- Solution: Added media query for single-column layout


- Challenge: Greeting logic and timezone awareness
- Solution: Used simple local system hours

## 7. Future Work

- Implement backend for contact form
- Optimize performance