//Form submission
const form = document.getElementById('suggest-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const categorySuggestion = document.getElementById('category-input').value;
    
    
    const content = `**📩 Message from Affiliate Store**\n**✉️ Suggested category:** ${categorySuggestion}\n..\n..`;

    try {
      const response = await fetch('https://discord.com/api/webhooks/1395409503125635072/mXmU5cyLx_Xo3Qn-nNoT8Q491iEjupUgkNfhHYOuAYgKP4nKwWom5YwDxUykJAT6W6DH', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: content
        })
      });
    //Displaying success modal
      if (response.ok) {
        showSuccessModal()
        form.reset();
      } else {
        alert('Couldnt send message');
      }
    } catch (error) {
      alert('Check your connection and try again');
      console.error(error);
    }
  });
// Removing and adding the class .hidden  
// Call showSuccessModal() after a successful form submission
  function showSuccessModal() {
    document.getElementById("successModal").classList.remove("hidden");
  }
  function closeModal() {
    document.getElementById("successModal").classList.add("hidden");
  }