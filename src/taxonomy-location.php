<?php get_header(); ?>

	<div class="grid-3-4 main" role="main">
		<!-- section -->
		<section>
		<?php cmp_breadcrumbs();?>
			

			<?php get_template_part('loop-product'); ?>

			<?php get_template_part('pagination'); ?>

		</section>
		<!-- /section -->
	</div>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
