// Birthday page scripts with romantic pink theme

// Animation GSAP timeline on load event
window.addEventListener("load", () => {
  Swal.fire({
    title: "🎵 Mau putar musik romantis?",
    html: '<p style="font-size: 1.1rem; color: #666;">Pengalaman akan lebih spesial dengan musik lho! 💕</p>',
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#ff6b9d",
    cancelButtonColor: "#ffafcc",
    confirmButtonText: "Ya, putar! 🎶",
    cancelButtonText: "Nanti aja",
    background: 'linear-gradient(135deg, #ffc1e3 0%, #ffafcc 100%)',
    customClass: {
      popup: 'romantic-popup',
      confirmButton: 'romantic-button',
      cancelButton: 'romantic-button-cancel'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});

const animationTimeline = () => {
  // Split chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  // Store original text for typing animation
  const originalText = textBoxChars.innerHTML;
  textBoxChars.innerHTML = "";

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  // Typing animation function
  const typeText = (element, text, speed = 50) => {
    return new Promise((resolve) => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
          resolve();
        }
      }, speed);
    });
  };

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewY: "-15deg",
  };

  // Animation timeline
  const tl = new TimelineMax();

  tl.to(".container", 0.6, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=6.4"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=6.4"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .call(() => typeText(textBoxChars, originalText, 7))
    .to(
      ".fake-btn",
      0.1,
      {
        backgroundColor: "#ff6b9d",
      },
      "+=8"
    )
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1.6"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=4")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=4")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.1,
      x: 10,
      backgroundColor: "#ff6b9d",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=4")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=0.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.3"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.6"
    )
    .to(
      ".idea-5",
      1,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=0.6"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=0.3"
    )
    .staggerFromTo(
      ".ballons img",
      3.4,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.28
    )
    .from(
      ".profile-picture",
      1.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.2, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff6b9d",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      2.4,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 2.24,
      },
      0.48
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    )
    .from(
      "#replay",
      0.5,
      {
        opacity: 0,
        scale: 0,
      },
      "+=0.5"
    );

  // Restart animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Add custom styles for SweetAlert
const style = document.createElement('style');
style.innerHTML = `
  .romantic-popup {
    border-radius: 25px !important;
    border: 3px solid rgba(255, 193, 227, 0.8) !important;
  }
  
  .romantic-button {
    border-radius: 15px !important;
    padding: 12px 30px !important;
    font-weight: 700 !important;
    font-family: 'Quicksand', sans-serif !important;
  }
  
  .romantic-button-cancel {
    border-radius: 15px !important;
    padding: 12px 30px !important;
    font-weight: 700 !important;
    font-family: 'Quicksand', sans-serif !important;
  }
  
  /* Floating animation for static elements */
  .one, .two, .three, .four, .idea-1, .idea-2, .idea-3, .idea-4, .idea-5, .profile-picture, .hat, .wish, .nine p {
    animation: gentle-float 4s ease-in-out infinite !important;
  }
  
  @keyframes gentle-float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;
document.head.appendChild(style);
