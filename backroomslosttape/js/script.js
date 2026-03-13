document.addEventListener('DOMContentLoaded', () => {
    
    // Windows 95 Vintage Mechanical Click Synthesizer
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    function playClickSound() {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        // A low-frequency square wave click mimics a plastic mechanical switch
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.015);
        
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.015);
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.015);
    }

    document.addEventListener('mousedown', (e) => {
        // Play click on interactive elements (buttons, links, interactable list items, window controls)
        const isClickable = e.target.closest('button, a, .tape-item.available, .win-btn');
        if (isClickable) playClickSound();
    });

    // Clock for status bar & taskbar
    const timeDisplay = document.getElementById('time-display');
    const taskbarTimeDisplay = document.getElementById('taskbar-time-display');
    
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const fullTimeStr = `${hours}:${minutes}:${seconds}`;
        const shortTimeStr = `${hours}:${minutes} PM`; // Or calculate strictly if needed, standard Win95 is usually HH:MM AM/PM
        
        let ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        let sysHours = now.getHours() % 12;
        sysHours = sysHours ? sysHours : 12; // the hour '0' should be '12'
        const sysTimeStr = `${sysHours}:${minutes} ${ampm}`;
        
        if (timeDisplay) timeDisplay.textContent = fullTimeStr;
        if (taskbarTimeDisplay) taskbarTimeDisplay.textContent = sysTimeStr;
    }
    
    setInterval(updateTime, 1000);
    updateTime();

    // Carousel Logic
    const track = document.getElementById('screenshot-track');
    const images = track.querySelectorAll('img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const counterDisplay = document.getElementById('image-counter');
    
    let currentIndex = 0;
    
    function updateCarousel() {
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
        
        counterDisplay.textContent = `${currentIndex + 1} / ${images.length}`;
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
    
    // Initialize first image
    if(images.length > 0) updateCarousel();

    // Add CRT Glitch effect and open video modal on interacting with playable tapes
    const playableTapes = document.querySelectorAll('.tape-item.available');
    const videoModal = document.getElementById('video-modal');
    const trailerIframe = document.getElementById('trailer-iframe');
    const closeVideoBtn = document.getElementById('close-video-modal');
    const videoModalTitle = document.getElementById('video-modal-title');
    
    playableTapes.forEach(tape => {
        tape.addEventListener('click', () => {
            const trailerUrl = tape.getAttribute('data-trailer');
            const tapeName = tape.querySelector('.tape-name').textContent;
            
            // Apply a quick glitch class to body
            document.body.style.filter = 'hue-rotate(90deg) contrast(150%)';
            document.body.style.transform = 'translate(2px, 2px)';
            
            setTimeout(() => {
                document.body.style.filter = 'none';
                document.body.style.transform = 'none';
            }, 100);
            
            setTimeout(() => {
                document.body.style.filter = 'hue-rotate(-45deg) saturate(200%)';
                document.body.style.transform = 'translate(-2px, -1px)';
            }, 150);
            
            setTimeout(() => {
                document.body.style.filter = 'none';
                document.body.style.transform = 'none';
                
                // Open the modal
                videoModalTitle.textContent = `Media Player - ${tapeName}`;
                trailerIframe.src = trailerUrl;
                videoModal.style.display = 'flex';
            }, 250);
        });
    });

    closeVideoBtn.addEventListener('click', () => {
        videoModal.style.display = 'none';
        trailerIframe.src = ''; // Stop video playback
        updateTaskbar();
    });

    // What Awaits You Text Document Logic
    const openWhatAwaitsBtn = document.getElementById('open-what-awaits');
    const whatAwaitsModal = document.getElementById('what-awaits-modal');
    const closeWhatAwaitsBtn = document.getElementById('close-what-awaits-modal');

    if (openWhatAwaitsBtn && whatAwaitsModal && closeWhatAwaitsBtn) {
        openWhatAwaitsBtn.addEventListener('click', () => {
            whatAwaitsModal.classList.remove('minimized-win');
            whatAwaitsModal.style.display = 'flex';
            bringWindowToFront(whatAwaitsModal);
            updateTaskbar();
        });

        closeWhatAwaitsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            whatAwaitsModal.style.display = 'none';
            updateTaskbar();
        });
    }

    // Dynamic Taskbar and Window Manager
    const windows = document.querySelectorAll('.desktop-window');
    const taskbarContainer = document.getElementById('taskbar-tasks-container');
    let highestZIndex = 100;

    function bringWindowToFront(winOverlay) {
        highestZIndex++;
        winOverlay.style.zIndex = highestZIndex;
        
        // Remove active class from all taskbar items, add to current
        document.querySelectorAll('.taskbar-item').forEach(item => item.classList.remove('active-task'));
        const taskBtn = document.querySelector(`.taskbar-item[data-target="${winOverlay.id}"]`);
        if (taskBtn) taskBtn.classList.add('active-task');
    }

    function updateTaskbar() {
        taskbarContainer.innerHTML = '';
        windows.forEach(win => {
            if (win.style.display !== 'none') {
                const title = win.getAttribute('data-title');
                let iconSrc = win.getAttribute('data-icon');
                
                const taskBtn = document.createElement('div');
                taskBtn.className = 'taskbar-item active-task';
                taskBtn.setAttribute('data-target', win.id);
                
                if (iconSrc === 'text-icon') {
                    taskBtn.innerHTML = `<i class="ph-fill ph-file-text" style="font-size: 16px;"></i><span>${title}</span>`;
                } else {
                    taskBtn.innerHTML = `<img src="${iconSrc}" alt="icon"><span>${title}</span>`;
                }
                
                // Clicking taskbar items focuses or minimizes
                taskBtn.addEventListener('click', () => {
                    if (win.style.display === 'none') {
                        // Restore
                        win.style.display = win.classList.contains('video-modal') || win.classList.contains('text-modal') ? 'flex' : 'block';
                        bringWindowToFront(win);
                    } else if (taskBtn.classList.contains('active-task')) {
                        // Minimize if already active
                        win.style.display = 'none';
                        taskBtn.classList.remove('active-task');
                    } else {
                        // Bring to front
                        bringWindowToFront(win);
                    }
                });

                taskbarContainer.appendChild(taskBtn);
            }
        });
    }

    // Window control buttons (minimize, close)
    windows.forEach(win => {
        // Bring to front on mousedown
        win.addEventListener('mousedown', () => bringWindowToFront(win));

        const minBtn = win.querySelector('.win-btn.minimize');
        const closeBtn = win.querySelector('.win-btn.close');

        if (minBtn) {
            minBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                win.style.display = 'none';
                updateTaskbar(); // Usually minimize keeps it in taskbar, but we render taskbar based on display! 
                // Ah! In Win95, closed apps leave the taskbar. Minimized apps stay in taskbar but are hidden.
                // To keep it simple, we'll just treat minimize as hiding and KEEP it in the taskbar by overriding display check later.
                // Let's use a class 'minimized' instead of display: none for true windows.
            });
        }
        
        if (closeBtn && win.id !== 'video-modal' && win.id !== 'what-awaits-modal') {
             closeBtn.addEventListener('click', (e) => {
                 e.stopPropagation();
                 win.classList.remove('minimized-win');
                 win.style.display = 'none';
                 updateTaskbar();
             });
        }
    });

    // We need to refine the updateTaskbar function to handle 'minimized' windows!
    // Let's rewrite updateTaskbar locally:
    function renderTaskbar() {
        taskbarContainer.innerHTML = '';
        let anyWindowOpen = false;

        windows.forEach(win => {
            // Modal windows only show in taskbar if they are actively opened (not display: none natively)
            const isModal = win.id === 'video-modal' || win.id === 'what-awaits-modal';
            const isVisible = win.style.display !== 'none';
            const isMinimized = win.classList.contains('minimized-win');

            if (!isMinimized && isVisible) {
                anyWindowOpen = true;
            }

            if ((!isModal && win.style.display !== 'none') || (isModal && isVisible) || isMinimized) {
                const title = win.getAttribute('data-title');
                let iconSrc = win.getAttribute('data-icon');
                
                const taskBtn = document.createElement('div');
                taskBtn.className = isMinimized ? 'taskbar-item' : 'taskbar-item active-task';
                taskBtn.setAttribute('data-target', win.id);
                
                if (iconSrc === 'text-icon') {
                    taskBtn.innerHTML = `<i class="ph-fill ph-file-text" style="font-size: 16px;"></i><span>${title}</span>`;
                } else {
                    taskBtn.innerHTML = `<img src="${iconSrc}" alt="icon"><span>${title}</span>`;
                }
                
                taskBtn.addEventListener('click', () => {
                    if (win.classList.contains('minimized-win')) {
                        win.classList.remove('minimized-win');
                        win.style.display = isModal ? 'flex' : 'block';
                        bringWindowToFront(win);
                    } else if (taskBtn.classList.contains('active-task')) {
                        win.classList.add('minimized-win');
                        win.style.display = 'none';
                        taskBtn.classList.remove('active-task');
                    } else {
                        bringWindowToFront(win);
                    }
                    renderTaskbar();
                });

                taskbarContainer.appendChild(taskBtn);
            }
        });

        // Toggle Logo Centering
        const logoContainer = document.querySelector('.desktop-logo-container');
        if (logoContainer) {
            if (anyWindowOpen) {
                logoContainer.classList.remove('centered');
            } else {
                logoContainer.classList.add('centered');
            }
        }
    }

    // Rebind minimize buttons to use class
    windows.forEach(win => {
        const minBtn = win.querySelector('.win-btn.minimize');
        if (minBtn) {
            // remove old listeners (clone trick or just override if we didn't add yet)
            // It's cleaner to bind once, so let's adjust it above.
        }
    });

    // Final clean bind
    windows.forEach(win => {
        const minBtn = win.querySelector('.win-btn.minimize');
        if (minBtn) {
            minBtn.onclick = (e) => {
                e.stopPropagation();
                win.classList.add('minimized-win');
                win.style.display = 'none';
                renderTaskbar();
            };
        }
    });

    // Make updateTaskbar alias to renderTaskbar
    function updateTaskbar() { renderTaskbar(); }

    // Init taskbar
    updateTaskbar();
});
