import { fromEvent, map, tap } from 'rxjs';
const text = document.createElement("div");
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim urna, rutrum vitae metus dignissim, venenatis bibendum nisl. Vivamus sollicitudin tristique felis, at mattis ex consectetur quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod libero nec purus volutpat ornare nec quis tellus. Sed purus ex, pretium ut augue ac, luctus lobortis augue. In id metus hendrerit, molestie tellus eu, elementum urna. Vestibulum aliquam, sapien sed semper aliquam, neque purus euismod neque, sed dictum velit metus eu dolor. Cras nunc massa, convallis ac elit vel, rutrum congue ligula. Duis vitae eleifend ante, in porttitor felis. Maecenas eget elementum ligula, ut mollis est. Donec imperdiet vitae urna id congue. Ut rhoncus auctor turpis, sit amet consectetur magna sagittis sit amet. Donec vel venenatis ex. Duis non euismod felis. Sed eget urna et dui interdum eleifend.
<br/>
<br/>
Suspendisse sollicitudin massa a neque bibendum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non tristique diam, id euismod tortor. Ut vel mi mattis, pellentesque neque id, efficitur risus. Donec vehicula dui in sapien consequat eleifend. Maecenas augue nunc, viverra ut lacus vel, aliquam aliquet risus.
<br/>
<br/>

Etiam placerat justo sed elit rutrum posuere. Donec ut fringilla massa. Donec a molestie tortor. Nam pharetra nisl vel risus auctor scelerisque. Donec venenatis, augue at condimentum lobortis, elit dolor convallis quam, ac ornare ipsum lectus quis mi. Vestibulum auctor ligula non pellentesque eleifend. Nulla ut fermentum ex. Etiam ipsum tellus, interdum in nisi ut, interdum efficitur arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ex dolor, cursus eu leo ultricies, maximus pulvinar turpis. Praesent erat sem, feugiat et elit pharetra, tincidunt auctor diam. Nulla dictum, lorem non condimentum sollicitudin, nibh libero sollicitudin ante, nec tempus tortor arcu at quam. Quisque id maximus odio. Praesent finibus leo lectus, at lobortis risus ultricies at. Pellentesque imperdiet nisl sed felis congue sodales. Morbi lorem massa, porttitor vel dui non, mollis laoreet mi.
<br/>
<br/>

Vivamus diam sem, ornare a fermentum quis, iaculis in ex. Integer at tristique tortor, eu imperdiet dolor. Curabitur viverra velit at lorem luctus imperdiet. Nunc purus diam, tempor a arcu eget, gravida placerat lorem. Phasellus pellentesque diam tortor. Etiam eu posuere risus. In hac habitasse platea dictumst. Suspendisse pulvinar interdum maximus. Integer a viverra elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas accumsan lorem nec turpis aliquet, in rhoncus ante finibus. Duis commodo efficitur nibh, eu euismod nisi vulputate a. Integer non diam ex. Nunc condimentum lacus at hendrerit pellentesque. Morbi blandit venenatis consequat. Phasellus vitae aliquet nibh.
<br/>
<br/>

Aenean metus dui, rutrum vel vestibulum a, tempor sed felis. Donec aliquam dictum lacinia. Donec a sollicitudin neque, sed tincidunt eros. Proin eget nisi at sem consectetur mattis. Nullam dui diam, pulvinar at pretium at, venenatis sit amet diam. Sed quis erat sollicitudin, venenatis nisl nec, euismod orci. Mauris tempor, metus posuere venenatis sagittis, urna augue hendrerit lorem, eu malesuada lectus ligula ac lorem. Sed vitae ante sagittis, viverra nibh quis, eleifend turpis. Nullam varius urna id semper bibendum. Morbi molestie, quam quis feugiat laoreet, urna neque elementum velit, vitae dignissim orci ligula non sapien. Nullam at ipsum nisl. Mauris gravida a enim vitae pulvinar.`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");

progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

//funcion que haga el calculo
const calcPercentScroll = (event_) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event_.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//streams

const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  // map((event_) => calcPercentScroll(event_))
  map(calcPercentScroll), tap(
    console.log
    
  )
);

progress$.subscribe((percent) => {
  progressBar.style.width = `${percent}%`;
});
