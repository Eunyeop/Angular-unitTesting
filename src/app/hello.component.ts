
export class HelloComponent {

  private intId;

  public changeBg(): void {
    this.intId = setInterval(() => {
      if (document.body.style.backgroundColor == 'white') {
      } else {
        document.body.style.backgroundColor = 'green';
        document.body.style.color = 'white';
      }
    }, 100);
  }

  
};