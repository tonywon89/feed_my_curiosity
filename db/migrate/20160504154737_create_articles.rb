class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.string :published
      t.string :entry_id
      t.text :summary
      t.text :content
      t.string :author
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :articles, :user_id
  end
end
