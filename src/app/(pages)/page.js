'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const articles = [
  { id:1, title:"title 1", subtitle: "subtitle 1", content:"Suspendisse viverra, tellus at laoreet molestie, dui mauris facilisis diam, a commodo diam nisi vel tellus. Praesent dignissim sem vel tellus euismod sodales. Aliquam convallis sapien eu malesuada faucibus. Suspendisse ut velit id nisi ultricies placerat. Nullam non augue lectus. Quisque id dolor imperdiet, placerat diam in, pharetra urna. Duis accumsan dolor vitae fringilla finibus. Nullam sed elementum neque, accumsan dapibus erat. In purus libero, tincidunt sit amet sapien a, tempor rhoncus nisl. Sed vel felis sed turpis consectetur pharetra non et felis.sapien eu malesuada faucibus. Suspendisse ut velit id nisi ultricies placerat. Nullam non augue lectus. Quisque id dolor imperdiet, placerat diam in, pharetra urna. Duis accumsan dolor vitae fringilla finibus. Nullam sed elementum neque, accumsan dapibus erat. In purus libero, tincidunt sit amet sapien a, tempor rhoncus nisl. Sed vel felis sed turpis consectetur pharetra non et felis.sapien eu malesuada faucibus. Suspendisse ut velit id nisi ultricies placerat. Nullam non augue lectus. Quisque id dolor imperdiet, placerat diam in, pharetra urna. Duis accumsan dolor vitae fringilla finibus. Nullam sed elementum neque, accumsan dapibus erat. In purus libero, tincidunt sit amet sapien a, tempor rhoncus nisl. Sed vel felis sed turpis consectetur pharetra non et felis.sapien eu malesuada faucibus. Suspendisse ut velit id nisi ultricies placerat. Nullam non augue lectus. Quisque id dolor imperdiet, placerat diam in, pharetra urna. Duis accumsan dolor vitae fringilla finibus. Nullam sed elementum neque, accumsan dapibus erat. In purus libero, tincidunt sit amet sapien a, tempor rhoncus nisl. Sed vel felis sed turpis consectetur pharetra non et felis. "},
  { id:2, title:"title 2", subtitle: "subtitle 2", content:"Sed eget sollicitudin nisl, vel cursus massa. Etiam et risus justo. Sed quam nunc, convallis interdum augue non, mattis malesuada dui. Aliquam feugiat hendrerit suscipit. Duis quis condimentum turpis, ac pellentesque orci. In tempor dui vitae laoreet consectetur. Sed at urna varius, eleifend nisi quis, lacinia sapien. Morbi et mauris in ligula ultrices dapibus in eget dui. Suspendisse facilisis pharetra turpis, dictum tempor mauris imperdiet laoreet. Duis quam turpis, luctus id interdum sed, laoreet ac leo. "},
  { id:3, title:"title 3", subtitle: "subtitle 3", content:"Nunc est massa, blandit quis augue non, volutpat suscipit lectus. Praesent elementum nibh ex, sit amet molestie elit pulvinar in. Nunc sit amet turpis vel est facilisis malesuada eget nec magna. Duis in tellus at purus ultrices convallis. Pellentesque tristique magna elit, eget ultricies metus pulvinar ac. Donec vitae sapien tincidunt ipsum pellentesque viverra in at nibh. Sed vitae sem finibus, efficitur mauris eu, congue ante. Morbi blandit,"},
]


export default function Home() {

  return (
   <main className="py-2 grow flex flex-col gap-0.5">
    <div className="flex gap-0.5 h-1/2">

      {
        articles.map((article)=>{
          return(
            <Card className="rounded-md w-1/3 " key={article.id}>
              <CardHeader>
                <CardTitle className="capitalize text-3xl font-medium">{article.title}</CardTitle>
                <h5 className="first-letter:capitalize italic text-xl font-light text-zinc-400">{article.subtitle}</h5>
              </CardHeader>
              <CardContent className="overflow-auto">
                <CardDescription>
                  <p>{article.content}</p>
                </CardDescription>
              </CardContent>
            </Card>
          )
        })
      }
      
    
    </div>
    <div className="flex gap-0.5 h-1/2">
      <Card className="rounded-md w-1/2 ">
        <CardHeader>
          <CardTitle className="capitalize text-2xl font-medium">Graphe 1</CardTitle>
        </CardHeader>
      </Card>
      <Card className="rounded-md w-1/2 ">
        <CardHeader>
          <CardTitle  className="capitalize text-2xl font-medium">Graphe 2</CardTitle>
        </CardHeader>
      </Card>

    </div>
   
    
   </main>
  );
}
