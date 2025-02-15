import { Component, OnInit } from '@angular/core';
import { concatMap, debounceTime, filter, first, from, fromEvent, interval, last, map, mergeMap, Observable, of, skip, skipLast, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'besant-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  // nameList: any[] = []
  x: number = 0
  y: number = 0
  result: string = ""

  countdown: number = 10;

  message: string = "progess..."
  message2: string = "progess..."

  task = of('Task1', 'Task2', 'Task3')

  constructor() { }

  // createObservable = new Observable(data => {
  //   setTimeout(() => {
  //     data.next("navin")
  //   }, 1000);
  //   setTimeout(() => {
  //     data.next("jega")
  //   }, 2000);
  //   setTimeout(() => {
  //     data.next("sonia")
  //   }, 3000);
  //   setTimeout(() => {
  //     data.next("saravanthi")
  //   }, 4000);

  //   setTimeout(() => {
  //     data.error(new Error("Something went wrong "))
  //   }, 5000);


  //   setTimeout(() => {
  //     data.next("mahishnav")
  //   }, 5000);

  //   setTimeout(() => {
  //     data.next("hinduja")
  //   }, 6000);

  //   setTimeout(() => {
  //     data.complete()
  //   }, 7000);

  // });

  ngOnInit(): void {
    of([1, 2, 3]).pipe(
      // map(num => num * 10), filter(val => val >= 20)
      // first()
      // last()
    ).subscribe(data => {
      console.log(data, "check here");
    })


    from([1, 2, 3]).pipe(
      // map(num => num * 10), filter(val => val >= 20)
      // first()
      // last()
    ).subscribe(data => {
      console.log(data, "value using from operators check here ");

    })

    of(1, 2, 3).pipe(
      tap(value => console.log("printing from tap :", value)
      ),
      // skip(1)
      skipLast(1)
    ).subscribe(data => {
      console.log(data, "value using check here ");
    })

    // interval(1000 ).subscribe(val => {
    //   console.log(val, "from interval");
    // })

    fromEvent<MouseEvent>(document, 'mousemove').pipe(map(event => {
      // console.log(event,"event");
      return {
        x: event.clientX,
        y: event.clientY
      }
    })).subscribe((values) => {
      this.x = values.x
      this.y = values.y
    })

    const input = document.getElementById('search');

    fromEvent(input!, 'input').pipe(debounceTime(300), map((event: any) => event.target.value)).subscribe(value => {
      this.result = value
    })


    interval(1000).pipe(take(10)).subscribe(val => (this.countdown = val))

    this.task.pipe(mergeMap((task) => interval(1000).pipe(map(i => `${task} - Step ${i + 1}`)))).subscribe(result => {
      this.message = result
    })
    // this.task.pipe(concatMap((task) => interval(1000).pipe(map(i => `${task} - Step ${i + 1}`)))).subscribe(result => {
    //   this.message2 = result
    // })

    this.task.pipe(switchMap((task) => interval(1000).pipe(map(i => `${task} - Step ${i + 1}`)))).subscribe(result => {
      this.message2 = result
    })
  }
  // getData() {
  //   this.createObservable.subscribe({
  //     next: (data) => {
  //       this.nameList.push(data)
  //     }, error: (error) => {
  //       console.log(error);
  //     }, complete() {
  //       alert("completed")
  //     }
  //   })
  // }
}
