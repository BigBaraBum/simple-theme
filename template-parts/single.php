<?php
if (!defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}
?>
<?php
while (have_posts()) : the_post();
?>

  <!-- Content -->
  <main <?php post_class('site-main'); ?> role="main">

    <div class="section-wrapper">
      <div class="wrapper">
        <section class="section">
          <div class="section-title__wrapper">
            <?php the_title('<h1 class="section-title">', '</h1>'); ?>
          </div>

          <div>
            <?php the_content(); ?>
          </div>

        </section>
      </div>
    </div>

    <?php
    // if ('' != locate_template('template-parts/contact_form_wrapper.php')) {
    //   get_template_part('template-parts/contact_form_wrapper');
    // }
    ?>

  </main>

<?php
endwhile;
