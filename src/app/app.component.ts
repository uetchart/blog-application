import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-application';

  Posts= [
      {
      	title: 'Mon premier post',
	  	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum ex vel purus scelerisque volutpat id sed metus. Aenean tincidunt vitae orci sit amet interdum. Vivamus molestie mi a orci molestie, quis ultricies enim convallis. Pellentesque dui dui, malesuada quis urna in, malesuada faucibus lorem. Fusce sit amet lobortis arcu. Ut dolor ipsum, semper id placerat sit amet, varius in lacus. Etiam lacinia finibus sapien vitae malesuada. Suspendisse dapibus, mauris ultricies laoreet suscipit, eros sapien mollis lectus, vitae ultricies leo libero egestas neque. Maecenas fermentum est vitae tincidunt cursus.',
	  	loveIts: 1,
	  	created_at: new Date()
	  },
	  {
	  	title: 'Mon deuxième post',
	  	content: 'Ut nec lectus cursus, tempor nisl in, rhoncus quam. Praesent ac mi orci. Nulla commodo, justo ut ultricies euismod, mauris lorem hendrerit lacus, ultrices vulputate sapien diam ac risus. Aenean convallis, risus a faucibus varius, velit libero pulvinar libero, a vestibulum tellus erat eget tellus. Sed condimentum arcu velit, id interdum velit interdum sed. Suspendisse ac finibus odio. Vestibulum ullamcorper eleifend erat ut rhoncus. Vestibulum sit amet volutpat leo, at venenatis arcu. Sed faucibus placerat ex eget suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam a lectus lacinia, dapibus urna eu, molestie diam.',
	  	loveIts: -1,
	  	created_at: new Date()
	  },
	  {
	  	title: 'Encore un post',
	  	content: 'Quisque mollis convallis dolor et elementum. Aenean sed vehicula metus. Duis vulputate est sit amet sapien egestas, et luctus tortor feugiat. Quisque eleifend justo et neque faucibus aliquet. Etiam varius eros felis, eget porta risus semper non. Curabitur cursus gravida quam vitae mollis. Nulla sodales ante turpis, vitae dictum augue imperdiet at. Suspendisse dapibus nisl vitae diam maximus porttitor. Duis tincidunt ipsum vitae convallis hendrerit. Proin mattis leo sapien, ut facilisis ante interdum et. Suspendisse maximus ex est, sit amet molestie libero elementum in.',
	  	loveIts: 0,
	  	created_at: new Date()
	  }
	];
}
