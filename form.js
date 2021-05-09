class Form{
    constructor(){
    this.title = createElement("h1");
    this.input = createInput("write your name or get killed");
    this.button = createButton("start Quiz");

    this.question = createElement("h1");
    this.button1 = createButton("Paper")
    this.button2 = createButton("Graphite");
    this.button3 = createButton("Animal Flesh");
    this.button4 = createButton("prpanol");

    this.greeting1 = createElement("h2");
    this.greeting2 = createElement("h2");
    this.greeting3 = createElement("h2");
    this.greeting4 = createElement("h2");

    this.buttonR = createButton("Reset")

    }
    hide(){
        this.title.hide(),
        this.input.hide(),
        this.button.hide();

    }
    display(){
     this.title.html("My quiz");
     this.title.position(600,300)

     this.input.position(600,400);
     this.button.position(600,500)
     
      this.button.mousePressed(()=>{
        this.title.hide(),
        this.input.hide(),
        this.button.hide();

        this.question.html("Choose the correct allotrope of carbon")
        this.question.position(600,200)
        this.button1.position(650,300);
        this.button2.position(650,350);
        this.button3.position(650,400);
        this.button4.position(650,450);

        this.button1.mousePressed(()=>{
            this.question.hide()
            this.button1.hide()
            this.button2.hide()
            this.button3.hide()
            this.button4.hide()

            this.greeting1.html("You are wrong ,now i will kill you");
            this.greeting1.position(500,300)

            this.buttonR.position(650,450);

        })
        this.button2.mousePressed(()=>{
          this.question.hide()
          this.button1.hide()
          this.button2.hide()
          this.button3.hide()
          this.button4.hide()

          this.greeting2.html("You are correct ,no rewards for quiz");
          this.greeting2.position(500,300)

      })

      this.button3.mousePressed(()=>{
        this.question.hide()
        this.button1.hide()
        this.button2.hide()
        this.button3.hide()
        this.button4.hide()

        this.greeting3.html("You are wrong ,now i will kill you");
        this.greeting3.position(500,300)

    })
    this.button4.mousePressed(()=>{
      this.question.hide()
      this.button1.hide()
      this.button2.hide()
      this.button3.hide()
      this.button4.hide()

      this.greeting3.html("You are wrong ,now i will kill you");
      this.greeting3.position(500,300)

  })
    })
    }
  }